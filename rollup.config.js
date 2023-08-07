import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias'
import strip from '@rollup/plugin-strip'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import path from 'path'
import fs from 'fs'

const { join } = path


const resolve = (dir) => {
  return path.resolve(__dirname,  dir)
}
/**
 * @desc 驼峰转横杠
 * @param {*} str
 */
function upperCasetoLine(str) {
  let temp = str.replace(/[A-Z]/g, function(match) {
    return '-' + match.toLowerCase()
  })
  if (temp.slice(0, 1) === '-') {
    temp = temp.slice(1)
  }
  return temp
}

// 将packages目录下的子目录组成如下格式数组'bs-form': resolve('packages/components/easeForm.ts')
function getComponentEntries(path) {
  const files = fs.readdirSync(resolve(path))
  const componentEntries = files.reduce((fileObj, item) => {
    //  文件路径
    const itemPath = join(path, item)
    //  在文件夹中
    const isDir = fs.statSync(itemPath).isDirectory()
    const [name, suffix] = item.split('.')

    //  文件中的入口文件
    if (isDir) {
      fileObj[`${upperCasetoLine(item)}`] = resolve(join(itemPath, 'index.ts'))
    } else if (suffix === 'js') {
      //  文件夹外的入口文件
      fileObj[name] = resolve(`${itemPath}`)
    }
    return fileObj
  }, {})
  return componentEntries
}

export default {
  input: {
    index: resolve('packages/index.ts'),
    ...process.env.FORMAT !== 'iife' ? getComponentEntries('packages/components') : {},
  },
  output:
      {
        dir: process.env.FORMAT === 'cjs' ? 'lib' : process.env.FORMAT,
        format: process.env.FORMAT,
        // name: 'backstage-vue3', // umd才用到
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
      declaration: process.env.FORMAT !== 'iife', // iife不要 d.ts文件
      declarationDir: `${process.env.FORMAT === 'cjs' ? 'lib' : process.env.FORMAT}/types`,
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
    // terser(), // 代码压缩
  ],
  external: [
    'vue',
    'element-plus',
    'ant-design-vue',
  ],
}


