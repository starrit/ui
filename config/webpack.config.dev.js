const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env) => {
  return merge(common(env), {
    devtool: 'source-map',
    devServer: {
      contentBase: 'dist',
      historyApiFallback: true,
      hot: true
    }
  });
};
