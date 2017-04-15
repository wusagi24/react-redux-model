const path = require('path');

const emptyDir = require('./tasks/empty_dir');
const copyDir = require('./tasks/copy_dir');
const devServer = require('./tasks/webpack_dev_server');
const webpackConfig = require('../config/webpack.config.dev');

const assetsDir = 'assets';
const distDir = 'dist';
const devServerPort = 8080;

const rootPath = path.resolve('');
const distDirPath = `${rootPath}/${distDir}`;
const assetDirPath = `${rootPath}/${assetsDir}`;

const devServerConfig = {
  port: devServerPort,
  contentBase: distDirPath,
  historyApiFallback: true,
};

const promise = Promise.resolve();
promise.then(() => {
  console.log('=== dev build start ===');
})
.then(() => emptyDir(distDirPath))
.then((output) => {
  if (output) {
    console.log(output);
  }
  console.log('complete task: empty dir');
})
.then(() => copyDir(assetDirPath, `${distDirPath}/${assetsDir}`))
.then((output) => {
  if (output) {
    console.log(output);
  }
  console.log('complete task: copy dir');
})
.then(() => devServer(webpackConfig, devServerConfig))
.then((url) => {
  console.log(`Starting server on ${url}`);
})
.catch((err) => {
  console.error(err);
  console.log('=== dev build failed ===');
});
