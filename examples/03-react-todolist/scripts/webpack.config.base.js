const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/env"], "@babel/react"]
            }
          },
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: path.resolve(__dirname, "tsconfig.json")
            }
          }
        ]
      }
    ]
    // noParse: ctx => {
    //   return /node_module/g.test(ctx);
    // }
  },
  resolve: {
    extensions: [".tsx", ".js", ".json"]
  },
  devtool: "eval-cheap-source-map",
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ]
};
