const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Parts = require('./webpack.parts');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
};

const Common = merge([
    {
        entry: {
            vendor: [
                'whatwg-fetch',
                'react',
                'prop-types',
                'react-dom',
                'react-router',
            ],
        },
        output: {
            path: PATHS.dist,
            filename: '[name].bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [PATHS.src],
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
            ],
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js',
            }),
            new HtmlWebpackPlugin({
                title: 'React Pokédex - Integrated with React, ES6/ES7, JSX, Webpack, Babel',
                template: `${PATHS.src}/index.html`,
                mobile: true,
            }),
        ],
    },
]);

module.exports = (env) => {
    /**
     * Production Configuration
     */
    if (env === 'production') {
        return merge([
            Common,
            Parts.base(env, {
                paths: PATHS.src,
            }),
            Parts.lintJS({
                paths: PATHS.src,
            }),
            Parts.SCSS(env),
        ]);
    }
    /**
     * Develpment Configuration
     */
    return merge([
        Common,
        Parts.base(env, {
            paths: PATHS.src,
            host: 'localhost',
            port: 3000,
        }),
        Parts.devServer({
            paths: PATHS.dist,
            host: 'localhost',
            port: 3000,
        }),
        Parts.lintJS({
            paths: PATHS.src,
            options: {
                emitWarning: true,
            },
        }),
        Parts.SCSS(env),
    ]);
};

