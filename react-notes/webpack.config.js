const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');



module.exports = {
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react'],
                        plugins:['babel-plugin-transform-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js[x]$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.less', 'jsonp'],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.html`,
            filename: 'index.html',
            inject: 'body',
        })
    ],
    devServer: {
        inline: true,
        port: 3000,
        host:'127.0.0.1'
    }
};