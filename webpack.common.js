const path = require('path');

module.exports = {
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
        modules: ['./node_modules']
    },
    output: {
      filename: 'script.js',
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        usedExports: true
    }
};