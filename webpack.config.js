module.exports = {
    entry: './scripts/slider.js',
    output: {
        filename: 'dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }
        ],
    }
};