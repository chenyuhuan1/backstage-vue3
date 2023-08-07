/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 10:50:26
 * @LastEditTime: 2023-06-05 16:10:36
 * @LastEditors: 陈宇环
 * @Description:
 */

const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = (dir) => {
  path.resolve(__dirname, '../' + dir)
}

const config = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  },
  chainWebpack: (chain) => {
    const oneofsMap = chain.module.rule(/\.js|jsx$/).oneOfs.store
    oneofsMap.forEach((item) => {
      item
        .use('babel-loader')
        .loader('babel-loader')
    })
  },
})

module.exports = config
