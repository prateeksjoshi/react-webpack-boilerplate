const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode:'production',
  entry: './src/index.tsx',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    clean: true
  },
  optimization:{
    minimize: true,
    minimizer: [new TerserPlugin()],
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
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
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
}