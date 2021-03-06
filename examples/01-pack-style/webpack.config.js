const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

const baseCssLoaders = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: devMode
    }
  },
  {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: "__[name]_[local]_[hash:6]"
      }
    }
  },
  {
    loader: "postcss-loader"
  }
];

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...baseCssLoaders]
      },
      {
        test: /\.less$/,
        use: [
          ...baseCssLoaders,
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
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
      filename: devMode ? "[name].[hash:8].css" : "[name].css",
      chunkFilename: devMode ? "[id].[hash:8].css" : "[id].css"
    })
  ]
};
