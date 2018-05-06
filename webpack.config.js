let htmlWebpackPlugin = require("html-webpack-plugin")
let path = require('path')

// 自己项目要用到的html名
const pages = [
  {
    name: 'index'
  },
  {
    name: 'page1'
  },
  {
    name: 'page2'
  }
]

// 配置webpack入口
let entry = __dirname + "/app/main.js"

// 配置webpack打包文件位置
let output = {
  path: __dirname + "/public",
  filename: "bundle.js"
}

// 配置服务器
let devServer = {
  contentBase: "./public",
  historyApiFallback: true,
  inline: true
}

// loader规则
let _module = {
  rules: [
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
    }
  ]
}

// 定义插件
const plugins = pages.map(({name}) => new htmlWebpackPlugin({
  filename: __dirname + `/public/${name}.html`,
  template: __dirname + `/app/${name}.temp.html`
}))

module.exports = {
  entry,
  output,
  devServer,
  module: _module,
  plugins
}