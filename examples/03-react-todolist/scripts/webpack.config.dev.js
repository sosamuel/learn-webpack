const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SizePlugin = require("size-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: [
    "react-hot-loader/patch",
    path.resolve(__dirname, "../", "src/index.tsx")
  ],
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "../", "build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode
            ? "style-loader"
            : {
                loader: MiniCssPlugin.loader
              },
          "css-modules-typescript-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "__[name]_[local]_[hash:6]"
              }
            }
          }
        ]
      },
      {
        test: /\.tsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              sourceMaps: true,
              presets: [["@babel/env"], "@babel/react"],
              plugins: [["react-hot-loader/babel"]]
            }
          },
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: path.resolve(__dirname, "../", "tsconfig.json")
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".js", ".json"]
  },
  devServer: {
    contentBase: path.join(__dirname, "../", "build"),
    port: 6001,
    hot: true
  },
  devtool: "inline-source-map",
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new SizePlugin(),
    new MiniCssPlugin({
      filename: "[name]@[hash:4].css",
      chunkFilename: "[id]@[hash:4].css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../", "public", "index.html")
    })
  ]
};
