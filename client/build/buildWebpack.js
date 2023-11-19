const path = require('path');
const buildLoaders = require(path.resolve(__dirname, 'buildLoaders'));
const buildResolvers = require(path.resolve(__dirname, 'buildResolvers'));
const buildPlugins = require(path.resolve(__dirname, 'buildPlugins'));

module.exports = function buildWebpack(options) {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
      publicPath: paths.public
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options)
  };
};