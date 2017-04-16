import path from 'path';

import webpack from 'webpack';
import yargs from 'yargs';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const nodeEnv = optimizeMinimize ? 'production' : 'development';

export default {
    entry: {
        'sha256-es': ['./src/sha256.js']
    },
    target: 'node',
    output: {
        path: path.join(__dirname, '/build'),
        filename: optimizeMinimize ? '[name].min.js' : '[name].js',
        library: 'sha256-es',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    externals: [],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': JSON.stringify(nodeEnv) }
        })
    ],
    devtool: optimizeMinimize ? 'source-map' : false
};