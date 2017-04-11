import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
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
  devServer: {
    contentBase: distRoot,
    port: 8080,
    historyApiFallback: true,
  },
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
