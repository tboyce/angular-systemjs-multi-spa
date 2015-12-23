'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    context: path.resolve('src'),
    entry: {
        app: './modules/app/index.ts',
        app2: './modules/app2/index.ts',
        common: ['angular']
    },
    output: {
        filename: '[name]/app.js',
        path: 'dist'
    },
    resolve: {
        root: path.resolve('src'),
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'babel-loader!ts-loader'
            }, {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    devServer: {
        contentBase: 'dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/modules/app/index.html',
            inject: 'body',
            hash: true,
            filename: 'app/index.html',
            chunks: ['common', 'app']
        }),
        new HtmlWebpackPlugin({
            template: './src/modules/app2/index.html',
            inject: 'body',
            hash: true,
            filename: 'app2/index.html',
            chunks: ['common', 'app2']
        }),
        new ngAnnotatePlugin({
            add: true
        }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ]
};