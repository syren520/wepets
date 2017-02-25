var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  entry:  __dirname + '/statics/dev/main.jsx',//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/statics/dev",//打包后的文件存放的地方
    // filename: "[name]-[hash].js"//打包后输出文件的文件名
    filename: "bundle.js"//打包后输出文件的文件名
  },
    module: {//在配置文件里添加JSON loader
      //migrate v1 to v2 https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules
      rules: [
        {
          test: /\.css$/,
          use:[
            {loader: "style-loader"},
            {loader: "css-loader",
              options: {
                modules:true
              }
            }
          ]
        },
        {
          test: /\.jsx$/,
          exclude: path.join(__dirname, "node_modules"),
          loader: "babel-loader", // Do not use "use" here,
          query: {presets: ['es2015','react']}
        }
      ]
      //v1 version
    // loaders: [
    //   {
    //     test: /\.json$/,
    //     loader: "json-loader"
    //   },
    //   {
    //     test: /\.jsx$/,
    //     exclude: /node_modules/,
    //     loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
    //     query: {
    //       presets: ['es2015','react']
    //     }},
    //   {
    //     test: /\.css$/,
    //     loader: 'style-loader!css-loader'//添加对样式表的处理
    //   }
    // ]
  },
  //   plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin(), // don't reload if there is an error
  //   new BundleTracker({filename: './webpack-stats.json'}),
  // ],
  // devServer: {
  //   contentBase: "./wepets/build",//本地服务器所加载的页面所在的目录
  //   // colors: true,//终端中输出结果为彩色
  //   historyApiFallback: true,//不跳转
  //   inline: true//实时刷新
  // },

  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.js', '.json'],
    //This part could allow you to require files using relative path instead of ../../otherDir/XXX
    //there isn't too much doc about that. Since we use webpack 2.2.0
    //extra point: do not trust stuff you find online, spend hours(yuk...)
    // https://webpack.js.org/guides/migrating/#resolve-root-resolve-fallback-resolve-modulesdirectories
    modules: [
     path.join(__dirname, "products/static"),
     path.join(__dirname, "admin/static"),
     path.join(__dirname, "node_modules")
   ]
  }

}
