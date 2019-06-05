const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ReactLoadablePlugin = require("react-loadable/webpack");
const WebpackMd5Hash    = require("webpack-md5-hash");

module.exports = {
    context : path.resolve(__dirname, "../app"),
    entry : {
        swiper : "../app/assets/plugin/swiper-3.4.2/swiper.min.js",
        app : [
            "babel-polyfill",
            path.resolve(__dirname, '../app/entry.js')
        ]
    },
    resolve : {
        extensions: ['.js', '.jsx'], //后缀名自动补全
        alias : {
            "@assets" : path.resolve(__dirname, "../app/assets/"),
            "@views"  : path.resolve(__dirname, "../app/views/"),
            "@tool"   : path.resolve(__dirname, "../app/tool/"),
            "@reducers" : path.resolve(__dirname, "../app/reducers/"),
            "@component" : path.resolve(__dirname, "../app/views/component/"),
        }
    },
    plugins: [
        // 根据文件内容生成 hash
        new WebpackMd5Hash(),               
        //把node_moduele内文件变为共有的
        new webpack.optimize.CommonsChunkPlugin({                   
            name : ["swiper", "lib"], 
            filename : '[name].[hash:8].bundle.js',
            minChunks : ({ resource }) => {
                return (
                    resource &&
                    resource.indexOf('node_modules') >= 0 &&
                    resource.match(/\.js$/)
                );
            }
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
          title : '首页',
          filename : "index.html",
          template : path.resolve(__dirname, "../app/views/index.html") 
        }),
    ],
    module : {
        rules : [
            { 
                test : /\.js[x]?$/,
                exclude: /(node_modules)/,
                use : [
                    {
                        loader : 'babel-loader?lazy',
                        options  : {
                            cacheDirectory : "../cache",
                            presets : ['es2015', 'react','stage-0'],
                            plugins : ['syntax-dynamic-import']
                        }
                    }
                ]
            }, {
                test : /\.(?:jpg|gif|png|svg)$/,
                use : 'url-loader?limit=8000&name=imgs/[name].[hash:8].[ext]'
            }
        ]
    },
    output: {
        publicPath : "/",
        path : path.resolve(__dirname, '../dist')
    }
}