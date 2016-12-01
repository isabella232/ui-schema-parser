var webpack = require('webpack');

module.exports = {
  context: __dirname + '/lib',
  entry: './index.js',
  output: {
    filename: './avsc-lib.js',
    path: __dirname + '/dist/',
    library: 'avsc',
    libraryTarget: 'umd'
  },
  node: {
    fs: "empty",
    buffer: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
        dead_code: true
      },
      output: {
        comments: false
      }
    })
  ]
};
