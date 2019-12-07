module.exports = {
  devServer: {
    port: 8888,
    disableHostCheck: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
  },
};
