var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var plugins = [];
if (process.env.NODE_ENV === 'production') {
  plugins = [
    new UglifyJsPlugin({
      uglifyOptions: {
        ie8: false,
        compress: {
          warnings: false,
          drop_console: false,
          dead_code: true
        },
        output: {
          comments: false
        }
      }
    })
  ];
}
module.exports = {
  mode: process.env.NODE_ENV,
  context: __dirname + '/lib',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: './cdap-avsc-lib.js',
    path: __dirname + '/dist/',
    library: 'cdapavsc',
    libraryTarget: 'umd'
  },
  node: {
    fs: "empty",
    buffer: true,
    global: true,
    setImmediate: false
  },
  plugins
};
