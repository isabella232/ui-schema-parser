var webpack = require('webpack');
var plugins = [];
if (process.env.NODE_ENV === 'production') {
  plugins = [
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
  ];
}
module.exports = {
  context: __dirname + '/lib',
  entry: './index.js',
  output: {
    filename: './cdap-avsc-lib.js',
    path: __dirname + '/dist/',
    library: 'cdapavsc',
    libraryTarget: 'umd'
  },
  node: {
    fs: "empty",
    buffer: true
  },
  plugins
};
