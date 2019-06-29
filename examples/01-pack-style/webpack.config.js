const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "[name].[hash:4].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode
            }
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /.(png|svg|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets"
          }
        }
      }
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack/pack-style",
      filename: "index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].[hash].css" : "[name].css",
      chunkFilename: devMode ? "[id].[hash].css" : "[id].css"
    })
  ]
};
