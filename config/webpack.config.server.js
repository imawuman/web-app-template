const nodeExternals = require("webpack-node-externals");
const paths = require("./paths");

module.exports = {
  devtool: "eval",
  entry: paths.appJs,
  target: "node",
  output: {
    path: paths.build,
    pathInfo: true,
    filename: "app.js",
  },
  externals: [nodeExternals()],
  module: {
    loaders: [{
      test: /\.js$/,
      include: paths.serverSrc,
      loader: "babel-loader",
      query: {
        cacheDirectory: true,
      },
    }, {
      test: /\.json?$/,
      loader: "json",
    }],
  },
};
