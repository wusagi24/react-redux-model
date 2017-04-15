const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const projectRoot = path.resolve('');
const srcRoot = `${projectRoot}/src`;
const distRoot = `${projectRoot}/dist`;

module.exports = {
  context: srcRoot,
  entry: {
    bundle: ['./index.jsx'],
  },
  output: {
    path: distRoot,
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${srcRoot}/index.html`,
    }),
  ],
};
