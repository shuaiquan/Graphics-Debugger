const path = require('path');
const webpack = require('webpack');

const config = {
    // none, production(default), deveploment
    mode: "development",
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    entry: path.resolve(__dirname, './src/index.tsx'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
    },

    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        port: 9000,
        // Enable Hot Module Replacement
        hot: true,
        // set log level
        clientLogLevel: 'warning',
        // default open Page
        openPage: './index.html',
        // don't show supress messages 
        noInfo: true,
    },

    plugins: [
        // use for Hot Module Replacement
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader'
            }
        ]
    }
};

module.exports = config;