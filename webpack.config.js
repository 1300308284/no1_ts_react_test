let webpack = require('webpack')
// 编译html文件
let HtmlWebpackPlugin = require('html-webpack-plugin')
// node自带的path工具
let path = require('path')
// 导出webpack的配置项,  是个对象
module.exports = {
  mode: 'development',
  // 从entry入口文件,开始编译,所有依赖汇总到一个的文件就是入口文件
  entry: './src/App.tsx',
  // 输出配置项
  output: {
    // webpack打包后的文件存放目录,因webpack需要绝对路径,固路径拼接,__dirname是当前目录的绝对路径
    path: path.join(__dirname, './dist'),
    // 输出什么文件名
    filename: 'bundle.js'
  },
  // 映射文件,ts和js间的映射文件, 便于调试
  devtool: 'source-map',
  devServer: {
    // 热更新
    hot: true,
    // 静态文件根目录,打包到的文件目录
    contentBase: path.join(__dirname, './dist')
  },
  // 解析
  resolve: {
    // 解析什么扩展名文件
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      'json'
    ]
  },
  module: {
    rules: [
      {
        // 匹配.tsx文件,使用ts-loader
        test: /\.tsx$/,
        loader: 'ts-loader'
      },
      {
        // loader分三个阶段:前中后
        test: /\.tsx$/,
        // 在js前, 提前执行
        enforce: 'pre',
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}