//开发时要用的
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const base = require("./webpack.config.base.js"); //引入共有的

module.exports = {
  ...base, //先把所有base抄过来
  mode: "development", //增加mode
  devtool: "inline-source-map", //关于webpage server dev
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      ...base.module.rules, ////我的module的rules内容是和base一样，并且增加我的css use
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
