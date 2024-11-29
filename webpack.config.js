var path = require('path');

module.exports = {
    entry: './src/main/js/app.jsx',
    devtool: 'inline-source-map',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname + '/./src/main/resources/static/built/',
        filename: "bundle.js",
        publicPath: '/built/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    },
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
        proxy: {
            '/': {
                target: 'http://localhost:8080',
                secure: false,
                prependPath: false,
                changeOrigin: true
            }
        },
        historyApiFallback: true
    }
};