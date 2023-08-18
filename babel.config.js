module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions'],
        },
        debug: false,
      },
    ],
  ],
  plugins: [
    '@babel/transform-runtime',
    [  // 本次增加
      'import',
      {  // 按需引入backstage-vue3组件
        libraryName: 'backstage-vue3',
        libraryDirectory: 'lib',
        customStyleName: () => {
          return 'backstage-vue3/lib/css/index.css'
        },
      },
    ],
  ],
}
