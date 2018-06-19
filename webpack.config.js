const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: { main: './index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          quiet: true,
          emitError: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    uglify: true,
                  },
                  modules: false,
                  loose: true,
                  useBuiltIns: true,
                  debug: true,
                },
              ],
              'react',
            ],
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread',
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
          'postcss-loader',
          'sass-loader'],
      },
      {
        test: /\.woff|.woff2$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './index.html',
      filename: 'index.html',
    }),
    new WebpackMd5Hash(),
    new FaviconsWebpackPlugin('./favicon.png'),
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8090,
    disableHostCheck: true,
    historyApiFallback: true,
  },
};
