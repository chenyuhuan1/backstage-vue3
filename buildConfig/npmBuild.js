/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 10:50:26
 * @LastEditTime: 2023-07-06 10:52:25
 * @LastEditors: 陈宇环
 * @Description:
 */

// const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const fs = require('fs')
const { join } = path

const TerserPlugin = require('terser-webpack-plugin')

const resolve = (dir) => {
  return path.resolve(__dirname, '../' + dir)
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

const config = {
  outputDir: resolve('lib'),
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    entry: {
      index: resolve('packages/index.ts'),
      ...getComponentEntries('packages/components'),
    },
    output: {
      //  文件名称
      filename: '[name]/index.js',
      //  构建依赖类型
      libraryTarget: 'umd',
      umdNamedDefine: false,
      //  依赖输出
      libraryExport: 'default',
      //  依赖名称
      library: 'backstage-vue3',
    },
    externals: {
      'element-plus': 'element-plus',
      vue: 'vue',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false, // 去掉注释
            },
          },
        }),
      ],
      // splitChunks: {
      //   chunks: 'all',
      //   cacheGroups: {
      //     // 第三方模块
      //     vendor: {
      //       name: 'common', // chunk 名称
      //       priority: 1, // 权限更高，优先抽离，重要！！！
      //       test: '/node_modules/', // 一般第三方模块都是从node_modules引进来如lodash
      //       minSize: 0,  // 大小限制
      //       minChunks: 1,  // 最少复用过几次
      //     },
      //   },
      // },
    },
  },
  css: {
    sourceMap: true,
    extract: {
      filename: '[name]/style.css',
    },
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
  },
}

module.exports = config
