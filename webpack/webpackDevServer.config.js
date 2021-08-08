const config = require("./webpack.config.dev");
const {merge} = require("webpack-merge");
const paths = require("./paths");

module.exports = merge(config, {
  mode: "development",
  devtool:  "eval-cheap-module-source-map",
  devServer: {
    compress: true,
    port: 8000,
    hot: true,

    historyApiFallback: true,
    watchContentBase: true,
    host: "localhost",
    publicPath: "/",

    contentBase: paths.appPublic,
  }
});