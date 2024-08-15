const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx|ts|tsx)$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader'
        }
      },
      {
        test:/\.(css|scss)$/,
        exclude:/node_modules/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  resolve:{
    extensions:['.js','.jsx','.ts','.tsx']
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    })
  ],
  devServer: {
    static:{
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 9000
  }
}