const path = require('path');

const emptyDir = require('./tasks/empty_dir');
const copyDir = require('./tasks/copy_dir');
const webpackCompile = require('./tasks/webpack_api');
const webpackConfig = require('../config/webpack.config.prod');

const assetsDir = 'assets';
const distDir = 'dist';

const rootPath = path.resolve('');
const distDirPath = `${rootPath}/${distDir}`;
const assetDirPath = `${rootPath}/${assetsDir}`;

const promise = Promise.resolve();
promise.then(() => {
  console.log('=== build start ===');
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
.then(() => webpackCompile(webpackConfig))
.then((output) => {
  if (output) {
    console.log(output);
  }
  console.log('complete task: webpack compile');
})
.then(() => {
  console.log('=== build complete ===');
})
.catch((err) => {
  console.error(err);
  console.log('=== build failed ===');
});
