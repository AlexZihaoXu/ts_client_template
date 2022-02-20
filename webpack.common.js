const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src/main.ts'),
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
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'res'),
                    to: path.resolve(__dirname, 'dist'),
                },
            ],
        }),
    ],
};