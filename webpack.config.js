const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.png|jpg|jpeg/,
            type: 'asset/resource'
          },
          {
              test: /\.scss$/,
              use: ["style-loader", "css-loader", "sass-loader"]
          },
        ]
      },
    devtool: 'inline-source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 5050,
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant",
            filename: "index.html",
            template: path.resolve(__dirname, 'src/template.html'),
        }),
    ],
}