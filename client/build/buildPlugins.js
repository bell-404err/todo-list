const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function buildPlugins(options) {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  const plugins = [new HtmlWebpackPlugin(paths.htmlPluginTemplate)];

  if(!isDev) {
    plugins.push(new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css'
    }));
  }

  return plugins;
};