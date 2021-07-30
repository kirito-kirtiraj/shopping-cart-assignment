const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        home: "./src/pages/index.js",
        products: "./src/pages/products",
    },
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "",
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        index: "index.html",
        port: 9000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
            },
            {
                test: /\.svg$/,
                type: "asset",
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
            {
                test: /\.hbs$/,
                use: ["handlebars-loader"],
            },
        ],
    },
    target: "web",
    plugins: [
        new TerserPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            chunks: ["home"],
            title: "Sabka Bazaar",
            description: "Your own bazaar",
            template: "src/index.hbs",
        }),
        new HtmlWebpackPlugin({
            filename: "products",
            chunks: ["products"],
            title: "Products | Sabka Bazaar",
            description: "Buy products online on sabka bazaar",
            template: "src/index.hbs",
        }),
        new MiniCssExtractPlugin({
            filename: "styles.[contenthash].css",
        }),
    ],
};
