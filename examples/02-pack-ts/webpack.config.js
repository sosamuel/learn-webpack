const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "awesome-typescript-loader",
          options: {
            configFileName: path.resolve(__dirname, "tsconfig.json")
          }
        }
      }
    ],
    noParse: ctx => {
      return /node_module/g.test(ctx);
    }
  },
  mode: "development",
  plugins: [new CleanWebpackPlugin()]
};
