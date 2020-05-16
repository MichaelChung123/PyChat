module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /no_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}