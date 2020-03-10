//开发和上线的config的共有属性都在这里

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "哈哈哈",
      template: "src/assets/admin.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"] //把文件变成文件路径
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"] //把stylus代码转化成css代码，之后再把css转化经过两步转化成style标签
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"] //把less代码转化成css代码，之后再把css转化经过两步转化成style标签
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader", //把sass代码转化成css代码，之后再把css转化经过两步转化成style标签
            options: {
              implementation: require("dart-sass")
            }
          }
        ]
      }
    ]
  }
};
