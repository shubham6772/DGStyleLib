const path = require('path');

module.exports = {
    devServer: {
        static: {
            directory : __dirname,
            watch  : true,
        },
        compress: true,
        hot: false,
        port: 9092,
        open : false,
        client : {
            progress : true,
        },
        devMiddleware: {
            index: true,
            writeToDisk: true,
          }

    },
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: 'DGstyles.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,            // Match .ts and .tsx files
                use: 'ts-loader',
                exclude: /node_modules/,
              },
              {
                test: /\.css$/,             // Match .css files
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
              },
        ]
    },
    resolve: {
        extensions: ['.css', '.js', '.ts', '.tsx']
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
};
