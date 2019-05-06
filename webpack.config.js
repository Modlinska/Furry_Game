module.exports = {
    entry: './js/app.js', //plika wejściowy
    output: {
        path: `${__dirname}/js`, // miejsce docelowe dla pliku wyjsciowego
        filename: 'out.js' // plik wyjsciowy
    },
    watch: true, //
    mode: "development", //ta opcja zostanie pominięta jeżeli użyjemy npm run build
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["env", {
                            targets: {
                                browsers: ['> 1%']
                            }
                        }]]
                    }
                }
            }
        ]
    }
}

//node node_modules/webpack/bin/webpack.js ->odpalanie