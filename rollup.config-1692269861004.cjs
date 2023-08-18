'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var babel = require('@rollup/plugin-babel');
var terser = require('@rollup/plugin-terser');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('@rollup/plugin-typescript');
var nodeResolve = require('@rollup/plugin-node-resolve');
var alias = require('@rollup/plugin-alias');
var strip = require('@rollup/plugin-strip');
var postcss = require('rollup-plugin-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var path = require('path');
var fs = require('fs');

const { join } = path;


const resolve = (dir) => {
  return path.resolve(__dirname,  dir)
};
/**
 * @desc 驼峰转横杠
 * @param {*} str
 */
function upperCasetoLine(str) {
  let temp = str.replace(/[A-Z]/g, function(match) {
    return '-' + match.toLowerCase()
  });
  if (temp.slice(0, 1) === '-') {
    temp = temp.slice(1);
  }
  return temp
}

// 将packages目录下的子目录组成如下格式数组'bs-form': resolve('packages/components/easeForm.ts')
function getComponentEntries(path) {
  const files = fs.readdirSync(resolve(path));
  const componentEntries = files.reduce((fileObj, item) => {
    //  文件路径
    const itemPath = join(path, item);
    //  在文件夹中
    const isDir = fs.statSync(itemPath).isDirectory();
    const [name, suffix] = item.split('.');

    //  文件中的入口文件
    if (isDir) {
      fileObj[`${upperCasetoLine(item)}`] = resolve(join(itemPath, 'index.ts'));
    } else if (suffix === 'js') {
      //  文件夹外的入口文件
      fileObj[name] = resolve(`${itemPath}`);
    }
    return fileObj
  }, {});
  return componentEntries
}
function getConfig(format) {
  return {
    input: {
      index: resolve('packages/index.ts'),
      ...format !== 'iife' ? getComponentEntries('packages/components') : {},
    },
    output:
        {
          dir: format === 'cjs' ? 'lib' : format,
          format,
          // name该选项用于，在想要使用全局变量名来表示你的 bundle 时，输出格式必须指定为 iife 或 umd。同一个页面上的其他脚本可以通过这个变量名来访问你的 bundle 导出
          ...format === 'iife' ? { name: 'backstageVue3' } : {},
          sourcemap: true,
          entryFileNames: '[name]/index.js', // 该选项用于指定 chunks 的入口文件模式 eg: bs-input/index.js
          chunkFileNames: 'chunkFile/[name]-[hash].js', // 该选项用于对代码分割中产生的 chunk 自定义命名
        },
    plugins: [
      alias({
        resolve: ['.jsx', '.js', '.tsx', '.ts', '.scss'],
        entries: [{
          find: '@', // 组件库用到的@替换为绝对路径
          replacement: resolve('src'),
        }],
      }),
      nodeResolve(),
      commonjs(),
      typescript({
        sourceMap: false,
        declaration: format !== 'iife', // iife不要 d.ts文件
        declarationDir: `${format === 'cjs' ? 'lib' : format}/types`,
        // outDir: `${format === 'cjs' ? 'lib' : format}`, //默认情况下，ts编译后的js文件，与源文件都在同一个目录下。使用outDir选项可以指定编译后的文件所在的目录。清理之前编译生成的js文件。
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      postcss({
        plugins: [
          autoprefixer(),
          cssnano(),
        ],
        extract: 'css/index.css',
      }),
      strip(), // 用于从代码中删除 debugger 语句和函数。包括 assert.equal、console.log
      format === 'iife' && terser(), // 代码压缩
    ],
    external: [
      'vue',
      'element-plus',
      'ant-design-vue',
      'ant-router',
    ],
  }
}
var rollup_config = [
  ...process.env.FORMAT === 'iife' ? [
    getConfig('iife'),
  ] : [
    getConfig('cjs'),
    getConfig('es'),
  ],
];

exports.default = rollup_config;
