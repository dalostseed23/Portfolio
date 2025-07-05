const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  base: '/Portfolio/',

  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8000,
    hot: true
  },

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        commerce: path.resolve(__dirname, 'src/commerce.html'),
        sport: path.resolve(__dirname, 'src/sport.html')
      },
    },
  }
}