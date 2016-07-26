var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
  context: APP_DIR,
  entry: {
    javascript: APP_DIR + '/main.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /.js?/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders : [
      {
        test: /.js?/,
        exclude: /node_modules/,
        loader: 'react-hot'
      },
      {
        test: /.js?/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
