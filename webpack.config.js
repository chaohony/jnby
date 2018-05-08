let htmlWebpackPlugin = require("html-webpack-plugin")
let path = require('path')

// 自己项目要用到的模板名
const pages = [{name: 'page1'},{name: 'page2'},{name: 'page3'},{name: 'page4'},{name: 'page5'},{name: 'page6'},{name: 'page7'},{name: 'page8'},{name: 'page9'}]

// 配置webpack入口
let entry = path.join(__dirname, "/src/main.js")

// 配置webpack打包文件位置
let output = {
  path: path.join(__dirname, "/public"),
  filename: "bundle.js"
}

// 配置服务器
let devServer = {
  contentBase: path.join(__dirname, "/public"),
  historyApiFallback: true,
  inline: true
}

let _module = {
  rules: [
    {
      test: /\.html$/,
      use: {
        loader: "html-loader"
      }
    },
    {
      test: /(\.jsx|\.js)$/,
      use: {
        loader: "babel-loader"
      },
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "postcss-loader"
        }
      ]
    },
    {
      test: /(\.jpg|\.png|\.gif|.jpeg)$/,
      use: {
        loader: "url-loader"
      }
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }
      ]
    },
    {
      test: /\.styl$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "stylus-loader"
        }
      ]
    }
  ]
}

// 定义插件
const plugins = pages.map(({name}) => new htmlWebpackPlugin({
  filename: path.join(__dirname, `/public/${name}.html`),
  template: path.join(__dirname, `/src/template/${name}.temp.html`)
}))

module.exports = {
  entry,
  output,
  devServer,
  module: _module,
  plugins
}