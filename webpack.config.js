var webpack = require('webpack');

module.exports = {

    entry: './app/main.jsx',
    output: {
        filename: 'bundle.js',
        path: 'dist/'
    },
    devServer: {
        contentBase: 'dist/',
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: 'node_modules',
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    }

};
