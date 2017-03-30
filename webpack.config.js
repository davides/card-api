var path = require('path');
var nodeExternals = require('webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const publicPath = path.resolve(__dirname, 'public');

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
  externals: [ nodeExternals() ],
  plugins: [
    new CopyWebpackPlugin([
      { context: './node_modules/card-web/dist', from: '*', to: publicPath }
    ])
  ]
};
