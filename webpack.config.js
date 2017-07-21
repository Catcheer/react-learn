const webpack = require("webpack")
const path = require("path")
const outputPath = path.join(__dirname, '/dist/')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
  entry: {
    'home': './src/js/home.jsx',
    'user': './src/js/user.js',
  },
  output: {
    path: outputPath,  // 文件打包到此目录下
    publicPath: '/h5/',
    filename: 'js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader']
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "h5"),
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    disableHostCheck: true,
    // hotOnly: true,
    // hot: true,
    inline: true
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new HtmlWebpackPlugin({ template: './view/index.html', }),
    // new webpack.HotModuleReplacementPlugin() // 启用 HMR
  ]

}