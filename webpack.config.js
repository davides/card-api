var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'api.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      { test: /\.js$/, include: [ path.resolve(__dirname, 'src') ], loader: 'babel-loader' }
    ]
  },
  externals: [ nodeExternals() ]
};
