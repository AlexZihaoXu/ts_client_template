const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackObfuscator = require('webpack-obfuscator');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
   mode: 'production',
   plugins:[
      new CleanWebpackPlugin(),
      // new WebpackObfuscator ({
      //    rotateStringArray: true
      // }, [])
   ]
});