var path = require('path');
var webpack = require('webpack');
var package = require('./package.json');

minimize = process.argv.indexOf('--minimize') !== -1;

var conf = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: package.name + '.js'
    },
    module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },
    ]},
    resolve: {
        root: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['', '.js'],
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.DedupePlugin()
    ]
}

if(minimize){
    conf.plugins.push(new webpack.optimize.UglifyJsPlugin());
    conf.output.filename = package.name + '.min.js'
}

module.exports = conf;
