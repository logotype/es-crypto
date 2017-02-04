import webpack from 'webpack';
import yargs from 'yargs';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const nodeEnv = optimizeMinimize ? 'production' : 'development';

export default {
    entry: {
        'md5-es': ['./src/MD5.js']
    },
    target: 'node',
    output: {
        path: './build',
        filename: optimizeMinimize ? '[name].min.js' : '[name].js',
        library: 'md5-es',
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