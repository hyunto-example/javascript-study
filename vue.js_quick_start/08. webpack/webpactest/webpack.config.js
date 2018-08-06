var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        main: __dirname + '/src/index.js'
    },
    output: {
        path: __dirname + '/public/dist/',
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin()        
    ],
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    devServer: {
        contentBase: './public/',
        port: 3000,
        historyApiFallback: true
    }
}