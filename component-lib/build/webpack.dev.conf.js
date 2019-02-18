const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.conf');
module.exports = merge(common,{
        plugins: [
            new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
            new webpack.HotModuleReplacementPlugin(), // Hot Module Replacement 的插件...
        ],
        module: {
            rules: [
                {
                    test: /\.css|scss$/,
                    use: ['style-loader','css-loader','sass-loader']
                },
            ],
        },
        devServer: {
            contentBase: path.join(__dirname, "../dist"),
            compress: true,
            port: 2244,
            host: '127.0.0.1',
            hot: true,
            disableHostCheck: true
        }
    })