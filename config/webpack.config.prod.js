const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const saveLicense = require('uglify-save-license');
const path = require('path');

const projectRoot = path.resolve('');
const srcRoot = `${projectRoot}/src`;
const distRoot = `${projectRoot}/dist`;

module.exports = {
  context: srcRoot,
  entry: {
    bundle: './index.jsx',
  },
  output: {
    path: distRoot,
    publicPath: '/',
    filename: '[name].min.js',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: saveLicense,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${srcRoot}/index.html`,
    }),
  ],
};
