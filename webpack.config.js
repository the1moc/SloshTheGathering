var path = require("path");
var webpack = require("webpack");

var phaserPath = path.join(__dirname, "/node_modules/phaser-ce/");
var phaser = path.join(phaserPath, "build/custom/phaser-split.js");
var pixi = path.join(phaserPath, 'build/custom/pixi.js');
var p2 = path.join(phaserPath, 'build/custom/p2.js');

module.exports = {
    entry: {
        app: "./src/main.ts",
        vendor: ["pixi", "p2", "phaser"]
    },

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },

    plugins: [
         new webpack.optimize.CommonsChunkPlugin( { name: 'vendor', filename: 'vendor.bundle.js'})
    ],

    resolve: {
        extensions: [".ts", ".js", ".json"],
        alias: {
            pixi: pixi,
            phaser: phaser,
            p2: p2
        }
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /pixi\.js$/, loader: 'expose-loader?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
            { test: /p2\.js$/, loader: 'expose-loader?p2' },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

        // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map"
};
