const webpack = require('webpack');
const yargs = require('yargs');

const optimizeMinimize = yargs.alias('p', 'optimize-minimize').argv.optimizeMinimize;
const nodeEnv = optimizeMinimize ? 'production' : 'development';

const plugins = optimizeMinimize ? [
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify(nodeEnv) } }),
        new webpack.optimize.UglifyJsPlugin({ comments: false, compress: { warnings: false } })
    ] : [
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify(nodeEnv) } })
    ];

module.exports = {
    entry: {
        'sha512-es': ['./src/SHA512.js']
    },
    target: 'node',
    output: {
        path: './build',
        filename: optimizeMinimize ? '[name].min.js' : '[name].js',
        library: 'sha512-es',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    externals: [],
    plugins: plugins,
    devtool: optimizeMinimize ? false : 'source-map'
};
