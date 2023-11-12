// Node path - ??
// __dirname - ??

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode }) => {

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
                        'css-loader',
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