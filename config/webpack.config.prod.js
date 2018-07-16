const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => merge(common(env), {
  plugins: [
    new UglifyJSPlugin()
  ]
});
