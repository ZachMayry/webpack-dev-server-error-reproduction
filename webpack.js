const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const babelLoaderOptions = {
  plugins: [["react-refresh/babel", { skipEnvCheck: true }]],
};


module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/index.scss"],
  output: {
    publicPath: "/",
  },
  stats: "errors-only",
  devServer: {
    client: {
      overlay: true,
    },
    historyApiFallback: true,
    port: 3001,
    static: false,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "raw-loader!src/index.html" }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelLoaderOptions,
        },
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    //   {
    //     test: /\.html$/,
    //     use: [
    //       {
    //         loader: "ejs-html-loader",
    //       },
    //     ],
    //   },
      {
        test: /\.(ico|png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
