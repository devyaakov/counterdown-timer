const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "bundle.css"}),
        new HtmlWebpackPlugin({
            title: 'Countdown Timer',
            template: './src/index.html'
        })   
    ],
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: { publicPath: './' }  },
                    { loader: 'css-loader'},
                    { loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options:{
                    outputPath: 'images',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    }
};