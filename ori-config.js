//①代表js
//②代表html
//③代表css--①代表用js ②代表用插件

var path = require("path"); //①
var HtmlWebpackPlugin = require("html-webpack-plugin"); //②
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //③②

module.exports = {
  //①新建dist目录，里面是转译后的低级js文件
  mode: "development", //development给开发者看，有注释；production给用户用，没任何注释，体积很小。
  entry: "./src/index.js", //入口：你想要转译哪个高级js文件,不写就会默认./src/index.js
  output: {
    //出口：
    path: path.resolve(__dirname, "dist"), //转译后的低级js文件放在新建的dist目录，不写默认都是这样的
    filename: "[name].[contenthash].js" //转译后的低级js文件的名字
  },

  //关于webpack server dev
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },

  plugins: [
    //②在dist目录里新建一个html文件，这个html文件会自动引入也在dist目录里的低级js文件
    new HtmlWebpackPlugin({
      title: "My App", //修改html文件的title
      template: "src/assets/admin.html" //html文件的模板是我们写的src/ assets / admin.html。所以我们可以把html模板写好：都改成中文zh，用淘宝的view point！
      //如果想让我们的模板里还用我们这里设置的title，就在模板里的title写<%= htmlWebpackPlugin.options.title %>插件里的options里的title
    }),
    //③②找到我们自己的css文件变成dist目录里新建的一个css文件（也可缓存，像js一样），而且dist里的html也会自动引用这个css文件
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css",
      ignoreOrder: false
    })
  ],
  //③
  module: {
    rules: [
      {
        test: /\.css$/i, //发现了任何以.css结尾的文件
        //③①用js的话：css-loader会把这个css文件的内容读到高级js文件里，style-loader会把css内容放入script标签，再放入dist里的html文件的head里
        //use: ["style-loader", "css-loader"]
        //③②用插件抽成文件的话
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      }
    ]
  }
};
