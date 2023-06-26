const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Leaderboard',
      filename: 'index.html',
      template: 'src/templates/index.html'
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/media/tvm-header-logo-red.png',
      favicons: {
        appleStartup: false,
        icons: {
          appleIcon: {
            sizes: [120, 152, 167, 180, 1024]
          }
        }
      }
    })
  ]
};
