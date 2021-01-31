const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./js/script.js",
    calendar: "./js/calendar.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 777,
    open: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: "index.html",
    }),
    new HTMLWebpackPlugin({
      filename: 'event.html',
      template: "event.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['css-loader','sass-loader']
      }
    ],
  },
};
