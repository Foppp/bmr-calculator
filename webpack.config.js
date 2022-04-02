const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.js',
  },
  devServer: {
    port: 3000,
    static: {
      directory: './dist',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // new Dotenv({
    //   path: path.resolve(__dirname,'.env')
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 8192,
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
};
