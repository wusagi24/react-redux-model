import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import saveLicense from 'uglify-save-license';
import path from 'path';

const projectRoot = path.resolve('');
const srcRoot = `${projectRoot}/src`;
const distRoot = `${projectRoot}/dist`;

export default {
  context: srcRoot,
  entry: {
    bundle: './index.jsx',
  },
  output: {
    path: distRoot,
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
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: saveLicense,
    //   },
    // }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${srcRoot}/index.html`,
    }),
  ],
};
