const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

exports.base = (env, { paths, host, port }) => {
    if (env === 'production') {
        return {
            entry: {
                app: `${paths}/index.js`,
            },
        };
    }

    return {
        entry: {
            app: [
                'react-hot-loader/patch',
                `webpack-dev-server/client?http://${host}:${port}`,
                'webpack/hot/only-dev-server',
                `${paths}/index.js`,
            ],
        },
    };
};

exports.devServer = ({ host, port, paths }) => ({
    devServer: {
        host,
        port,
        inline: true,
        historyApiFallback: true,
        hot: true,
        stats: 'minimal',
        contentBase: paths,
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
});

exports.lintJS = ({ paths, options }) => ({
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: paths,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'eslint-loader',
                        options,
                    },
                ],
            },
        ],
    },
});

exports.SCSS = (env) => {
    if (env === 'production') {
        return {
            module: {
                rules: [
                    {
                        test: /\.scss/,
                        use: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: true,
                                        modules: true,
                                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                    },
                                },
                                {
                                    loader: 'sass-loader',
                                },
                            ],
                        }),
                    },
                ],
            },
            plugins: [
                new ExtractTextPlugin({
                    filename: 'style-[hash].css',
                    allChunks: true,
                }),
            ],
        };
    }

    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                camelCase: true,
                                importLoaders: 1,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
    };
};
