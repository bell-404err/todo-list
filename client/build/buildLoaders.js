const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function buildLoaders({ mode }) {
  const isDev = mode === 'development';
    
  const babelLoader = {
    test: /\.(?:js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: 'defaults' }],
          ['@babel/preset-react', { runtime: 'automatic' }]
        ]
      }
    }
  };
    
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath) => resPath.includes('.module.'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },

        },
      },

      'sass-loader',
    ],
  };
    
  return [
    babelLoader,
    scssLoader
  ];
};