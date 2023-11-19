const path = require('path');
const buildWebpack = require(path.resolve(__dirname, 'build', 'buildWebpack'));

module.exports = ({ mode }) => {
  const isDev = mode === 'development';

  const projectConfig = {
    mode: isDev ? 'development' : 'production',

    paths: {
      entry: path.resolve(__dirname, 'src', 'index.jsx'),
      output: path.resolve(__dirname, '..', 'server', 'public'),
      public: '/static/',
      htmlPluginTemplate: path.resolve(__dirname, 'public', 'index.html')
    }
  };

    
  return buildWebpack(projectConfig);
};