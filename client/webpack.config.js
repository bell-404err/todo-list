// Node path - ??
// __dirname - ??

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode }) => {

    const isDev = mode === 'development';
    
    return {
        mode,
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
        output: {
            filename: '[name].[contenthash].js',
            // path: path.resolve(__dirname, "build"),
            path: path.resolve(__dirname, '..', 'server', 'public'),
            clean: true,
            // publicPath: "/"
            // Дефолтный путь
            publicPath: '/static/'
        },
        module: {
            // Loaders
            rules: [
                {
                    // Регулярное выражение по которому будут искаться файлы
                    test: /\.(?:js|jsx)$/,
                    // То, что не нужно проверять
                    exclude: /node_modules/,
                    // Используемые пакеты
                    use: {
                        loader: 'babel-loader',
                        // Опции пакетов
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                                ['@babel/preset-react', { runtime: 'automatic' }]
                            ]
                        }
                    }
                },

                {
                    test: /\.s[ac]ss$/i,
                    // Лоадеры запускаются снизу вверх
                    use: [
                        // Creates `style` nodes from JS strings ^
                        'style-loader',
                        // Translates CSS into CommonJS ^
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
                        // Compiles Sass to CSS ^
                        'sass-loader',
                    ],
                },
            ]
        },
        resolve: {
            // Какие файлы будут подразумеваться
            extensions: ['.js', '.jsx']
        },
        plugins: [
            // Плагин импортирует скрипты в html файл
            new HtmlWebpackPlugin(path.resolve(__dirname, 'public', 'index.html'))
        ],

    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'public'),
    //     },
    //     compress: true,
    //     // Auto refresh
    //     hot: true,
    //     port: 9000,
    // }
    };
};