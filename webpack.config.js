const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "my-bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          // MiniCssExtractPlugin.loader, // create "main" file and add in this file compile scss (here don't work)
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "/src/index.html" }),
    // new MiniCssExtractPlugin(),
  ],

  devServer: {
    port: "8888",
  },
};
