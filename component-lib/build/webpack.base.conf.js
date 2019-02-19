const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        publicPath: "/",
        filename: '[name].bundle.[hash:8].js',
        path: path.resolve(__dirname, "..dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "../src"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015", "react", "stage-0"]
                    }
                }
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
        ],
        extensions: ['.js', '.jsx', '.json', '.scss', ".less", '.css'],
        alias: {
            '@packages': path.resolve(__dirname, '../packages/'),
            '@js': path.resolve(__dirname, '../src/js/'),
            '@css': path.resolve(__dirname, "../src/assets/css"),
            '@lib': path.resolve(__dirname, "../src/assets/lib"),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html')
        })
    ]
}