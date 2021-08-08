const path = require('path');

module.exports = {
  mode: "production",
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'Hmmmmmm',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: "ts-loader",
      exclude: /node_modules/
    }, {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
    }]
  }
};