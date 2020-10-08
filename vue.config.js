const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/scss/_variables.scss')],
    },
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8011,
    proxy: {
      '/api': {
        // 自订 local 端的位置
        target: 'http://localhost:8080/ypm', // 远端 URL Domain
        changeOrigin: true,
        pathRewrite: {
          // 重写路径
          '^/api': '',
        },
      },
    },
  },
}
