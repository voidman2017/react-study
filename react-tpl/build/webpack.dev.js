const path = require("path");
const merge = require('webpack-merge');
const webpack = require("webpack");
const common = require("./webpack.default");

module.exports = merge(common, {    
    devtool: 'cheap-module-eval-source-map',
    module : {
        rules : [
            {
                test : /\.scss?$/,
                use : ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test : /\.css?$/,
                use : ['style-loader', 'css-loader']
            }
        ]
    },  
    devServer : {
        contentBase : path.join(__dirname, "../dist"),
        historyApiFallback : true,
        progress : true,
        compress : true,
        overlay : true,
        inline : true,
        stats : {
            chunks : true,
            cached : true,
            errors : true,
            errorDetails : true,
        },
        port : 3233,
        host : '127.0.0.1',
        hot : true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
    ],
    output : {
        filename: '[name].[hash:8].bundle.js',
        chunkFilename : '[name].[hash:8].bundle.js',
    }
})