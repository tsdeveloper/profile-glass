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
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i, 
            //     loader: 'file-loader',
            //     options: {
            //       name: '/images/[name].[ext]'
            //     }
            // }
            {
                test: /\.html$/i,
                loader: 'html-loader',
              },
            //   {
            //     test: /\.(png|jpe?g|gif|svg)$/i,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //         options: {
            //           name: '[name].[hash].[ext]',
            //           publicPath: 'src/images',
            //           outputPath: 'images',
            //           esModule: false
            //         }
            //       }
            //     ]
            //   }
        ],
    },
}