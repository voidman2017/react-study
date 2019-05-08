const path = require("path");
const merge = require('webpack-merge');
const webpack = require("webpack");
const common = require("./webpack.default");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const compressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");

//公共模块配置参数
const commonChunkOpt = {
    children : true, 
    async : false ,
    filename : '[name].[chunkhash:8].bundle.js',
}

//js 压缩配置参数
const uglifyJsOpts = {
    test: /\.js($|\?)/i,
    exclude : /node_modules/,
    sourceMap : false,
    cache : true
}

//compression 配置参数
const compOpts = {
    test: /\.(js|css|html)$/,
    asset: "[path].gz[query]",
    algorithm: "gzip",
    threshold: 10240,
    minRatio: 0.8
}

//css压缩loader
const cssLoader = {
    loader : 'css-loader',
    options  : {
        minimize : true
    }
}

// css 文件提取
const extractSASS = new ExtractTextPlugin("css/[name]-[chunkhash:8].css");
const extractCSS = new ExtractTextPlugin("css/[name]-[chunkhash:8].css");

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    stats : {  
        hash    : true,
        colors  : true,             // 提示颜色区分
        errors  : true,             // 增加错误提示
        chunks  : false,
        children : false
    },
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : ExtractTextPlugin.extract({
                    use : [cssLoader, 'fast-sass-loader']
                })
            }, {
                test : /\.css$/,
                use : ExtractTextPlugin.extract({
                    use : cssLoader, 
                })
            }
        ]
    },  
    plugins: [
        new CleanWebpackPlugin([ 'dist/**/*.*' ], { 
            root : path.resolve(__dirname, '../'),
            verbose :  true,  
        }),
        extractSASS,
        extractCSS,
        // new BundleAnalyzerPlugin(),      //打包代码分析(需要时再开启)
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin( commonChunkOpt ),
        new ParallelUglifyPlugin( uglifyJsOpts ),
    ],
    output : {
        filename: '[name].[chunkhash:8].bundle.js',
        chunkFilename : '[name].[chunkhash:8].bundle.js',
    }
})