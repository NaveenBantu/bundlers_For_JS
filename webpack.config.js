const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'development',
    watch: true,
    entry: ['./src/js/onViewGraphNG.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'onview.js',
        library: 'OnView',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, exclude: /(node_modules)/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', { 'plugins': ['@babel/plugin-proposal-class-properties'] }] } } }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            files: ['./src/js/*.js', './src/js/profile/*.js', './src/css/*.css', './*.html'],
            server: true,
        })
    ],
    devtool: 'inline-source-map',
};