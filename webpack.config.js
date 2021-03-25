const path = require('path'),
    HtmlWebPackPlugin = require('html-webpack-plugin'),
     webpack = require('webpack'),
     BrowserSyncPlugin  = require('browser-sync-webpack-plugin'),
      {CleanWebpackPlugin} = require('clean-webpack-plugin');



module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './public'),
        compress: true,
        hot: true,
        },
    entry: {
        main: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
        })
    ],
    module: {
        rules: [
            // CSS, PostCSS, and Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
}