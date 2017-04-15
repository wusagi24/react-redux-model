/**
 * webpack の Node.js API 経由でコンパイルするタスク
 * @param {webpack.Compiler} compiler
 * @return {Promise}
 */
function webpackCompile(compiler) {
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        const errOutput = [];
        errOutput.push(err.stack || err);
        if (err.details) {
          errOutput(err.details);
        }
        reject(new Error(errOutput.join('\n')));
        return;
      }

      const info = stats.toJson();
      if (stats.hasErrors()) {
        reject(new Error(info.errors.join('\n')));
        return;
      }

      const output = [];
      if (stats.hasWarnings()) {
        output.push(info.warnings);
      }
      output.push(stats.toString());

      resolve(output.join('\n'));
    });
  });
}

module.exports = webpackCompile;
