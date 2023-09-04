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
    '@babel/plugin-transform-runtime',
    // [
    //   'component',
    //   {
    //     libraryName: 'element-plus',
    //     styleLibraryName: 'theme-chalk',
    //   },
    // ],
  ],
}
