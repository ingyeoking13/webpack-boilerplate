const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './app.js',
    output: {
        // output directory
        path: path.resolve(__dirname, '..', 'Backend/', 'public/', 'dist/'),
        filename: "bundle.js",
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }, {
                test: /\.(png|jpe?g)$/,
                loader: 'url-loader',
                options: { 
                    limit: 8000,
                    name: '[path][hash].[ext]'
                },
                dependency: {not:['url']}, // url keyword enable
            } ,{
                test: /\.(svg)$/i,
                loader: 'file-loader',
                options : {
                    name: '[path][name].[ext]',
                },
                dependency: {not:['url']}, // url keyword enable
            },
        ],
    },
    //webpack - dev server
    devServer: {
        static: {
            directory : path.join(__dirname, "/dist"),
        },
        hot: true,
        host: "localhost",
        port: 3000
    },
    
    devtool: 'inline-source-map',
    plugins : [new HtmlWebpackPlugin({
         template : 'template/index.html'
    })]
}