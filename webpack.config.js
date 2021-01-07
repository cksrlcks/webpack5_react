const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry : {
        //app: ['@babel/polyfill', './src/index.js'],
        app: './src/index.js'
    },
    output : {
        path : path.join(__dirname, 'dist'),
        filename : '[name].js',
        publicPath : '/' //파일들이 위치할 서버 상의 경로
    },
    module : {
        rules : [
            {
                test: /\.jsx?$/,
                loader : 'babel-loader',
                options : {
                    presets: [
                        [
                          '@babel/preset-env', {
                            targets: { browsers: ["last 2 versions", ">= 5% in KR"] },
                            modules: false,
                            useBuiltIns: 'entry',
                            corejs : {version:3}
                          }
                        ],
                        '@babel/preset-react', 
                    ],
                },
                exclude : ['/node_modules']
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader", // 개발 환경
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: "url-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                    limit: 10000, // 10Kb
                },
            },
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        publicPath: "/",
        hot: true,
        port: 9000
    },
    resolve : {
        modules : ['node_modules'],
        extensions : ['.js', '.json', '.jsx', '.css']
    },
    optimization: {
        minimize: true,
        splitChunks: {},
        concatenateModules: true,
    }
}