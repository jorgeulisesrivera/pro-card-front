const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');

module.exports = env => {
  return {
    output: {
      filename: 'app.bundle.js',
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      }),
      //new webpack.EnvironmentPlugin({
      //  TEST: '',
      //}),
      new Dotenv()
    ],
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader', 
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                '@babel/transform-runtime',
              ]
            }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}
