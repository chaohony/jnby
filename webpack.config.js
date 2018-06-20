const htmlWebpackPlugin = require("html-webpack-plugin")
const extractTextWebpackPlugin = require("extract-text-webpack-plugin")
const path = require('path')

// 自己项目要用到的模板名
const pages = [{name: 'index'}, {name: 'page2'},{name: 'page3'},{name: 'page4'},{name: 'page5'},{name: 'page6'},{name: 'page7'},{name: 'page8'}]

// 配置webpack入口
const entry = path.join(__dirname, "/src/main.js")

// 配置webpack打包文件位置
const output = {
    path: path.join(__dirname, "/public"),
    filename: "[name].js"
}

// 配置服务器
const devServer = {
    contentBase: path.join(__dirname, "/public"),
    historyApiFallback: true,
    inline: true
}

const _module = {
    rules: [
        {
            test: /\.html$/,
            use: {
                loader: "html-loader"
            }
        },
        {
            test: /(\.jsx|\.js)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        },
        {
            test: /(\.jpg|\.png|\.gif|.jpeg)$/,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        limit: 12000,
                        outputPath: 'images',
                        name: '[name].[hash].[ext]'
                    }
                }
            ]
        },
        {
            test: /\.scss$/,
            use: extractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            })
        },
        {
            test: /\.(otf)|(woff)|(eot)|(ttf)$/,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: "[hash:8].[name].[ext]",
                        outputPath: 'images'
                    }
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
plugins.push(new extractTextWebpackPlugin("styles.css"))

module.exports = {
    entry,
    output,
    devServer,
    module: _module,
    plugins
}