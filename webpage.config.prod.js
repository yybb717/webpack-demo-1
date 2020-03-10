//上线时用的
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base.js"); //继承base

module.exports = {
  ...base, //先把所有base抄过来
  mode: "production", //增加mode
  plugins: [
    ...base.plugins, //我的插件内容是先抄base的插件内容，在增加我的插件
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false
    })
  ],
  module: {
    rules: [
      ...base.module.rules, //我的module的rules内容是和base一样，并且增加我的css use
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader"
        ]
      }
    ]
  }
};
