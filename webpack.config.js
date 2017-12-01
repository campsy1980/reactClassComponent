const path = require("path");

module.exports = {
    entry: "./_Dev/index.js",
    output: {
        path : path.join(__dirname),
        filename: "index.js"
    },
    module:{
        loaders:[
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}