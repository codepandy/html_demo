var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: {
        default: './main.js',
        flexdemo:'./scripts/flex_main.js'
    },
    output: {
        path: './build',
        filename:'[name].bundle.js'
    },
    devServer: {
        inline: true,
        port:8787
    },
    devtool: 'source-map',
    module: {
        loaders: [
            
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                loader:'style!css'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}