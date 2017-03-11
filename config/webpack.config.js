const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const paths = require("./paths");

const staticFileRegex = /\.(woff|svg|ttf|eot|gif|jpeg|jpg|png)([\?]?.*)$/;

module.exports = {
  devtool: "cheap-module-source-map",
  entry: paths.indexJs,
  output: {
    path: path.join(paths.build, "web"),
    pathInfo: true,
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: "source-map",
    }],
    loaders: [{
      test: /\.js$/,
      include: paths.webSrc,
      loader: "babel-loader",
      query: {
        cacheDirectory: true,
        presets: ["es2016", "es2015", "react", "stage-1"],
      },
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        "style",
        ["css?sourceMap", "postcss"]
      )
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        "style",
        ["css?sourceMap", "postcss", "sass?sourceMap"]
      )
    }, {
      test: /\.json?$/,
      loader: "json",
    }, {
      test: staticFileRegex,
      include: paths.nodeModules,
      loader: "file-loader",
      query: {
        name: "[path][name].[ext]",
      },
    }, {
      test: staticFileRegex,
      include: paths.webSrc,
      loader: "file-loader",
      query: {
        name: "[name]-[hash].[ext]",
      },
    }],
  },
  postcss: () => {
    return [
      autoprefixer({
        browsers: [
          ">1%",
          "last 4 versions",
          "Firefox ESR",
          "not ie < 9",
        ],
      }),
    ];
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: paths.indexHtml,
      favicon: paths.favicon,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
