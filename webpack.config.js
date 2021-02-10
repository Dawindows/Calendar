const path = require("path");
const miniCss = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./script.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 4200,
    open: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
    new miniCss({
         filename: 'style.css',
      }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test:/\.(s*)css$/,
        use: [miniCss.loader,'css-loader','sass-loader']
      }   
    ]
  },
};
