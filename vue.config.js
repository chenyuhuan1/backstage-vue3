const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
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
