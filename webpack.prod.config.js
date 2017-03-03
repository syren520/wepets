var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',//配置生成Source Maps，选择合适的选项
  entry:  __dirname + '/statics/dev/main.jsx',//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/statics/product",//打包后的文件存放的地方
    filename: "bundle-[hash].js",//打包后输出文件的文件名
    publicPath: "/static/"
  },
    module: {
      //migrate v1 to v2 https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules
      rules: [
        {
          test: /\.css$/,
          exclude: path.join(__dirname, "node_modules"),
          use:[
            {loader: "style-loader"},
            {loader: "css-loader"}
          ]
        },
        {
            test: /\.scss$/,
          exclude: path.join(__dirname, "node_modules"),
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            },
            {
                loader: "sass-loader" // translates SCSS into CSS
            }
            ]
        },
        {
          test: /\.jsx$/,
          exclude: path.join(__dirname, "node_modules"),
          loader: "babel-loader",
          query: {presets: ['es2015','react']}
        }
      ]
  },
    plugins: [
      new HtmlWebpackPlugin(
        {
          filename: __dirname+'/statics/product/main_layout.html',
          template: __dirname+'/statics/dev/main_layout.html',
          inject: 'body'
        }
      )
  ],
  // devServer: {
  //   contentBase: "./wepets/build",//本地服务器所加载的页面所在的目录
  //   // colors: true,//终端中输出结果为彩色
  //   historyApiFallback: true,//不跳转
  //   inline: true//实时刷新
  // },

  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.js', '.json', '.css', '.scss'],
    //This part could allow you to require files using relative path instead of ../../otherDir/XXX
    //there isn't too much doc about that. Since we use webpack 2.2.0
    //extra point: do not trust stuff you find online, spend hours(yuk...)
    // https://webpack.js.org/guides/migrating/#resolve-root-resolve-fallback-resolve-modulesdirectories
    modules: [
     path.join(__dirname, "products/static"),
     path.join(__dirname, "admin/static"),
     path.join(__dirname, "statics"),
     path.join(__dirname, "node_modules")
   ]
  }

}
