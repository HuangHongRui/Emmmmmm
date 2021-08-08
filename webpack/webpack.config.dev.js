const path = require("path");
const paths = require("./paths");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(paths.appSrc, "index.tsx"),
  output: {
    path: paths.appDist,
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "src": paths.appSrc,
    },
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader" ],
      },
      {
        test: /\.css$/i,
        use: [ "style-loader", "css-loader" ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.appPublic, "index.html"),
      favicon: path.resolve(paths.appPublic, "favicon.ico"),
    }),
    //  热加载
    new CleanWebpackPlugin(),
  ]
};