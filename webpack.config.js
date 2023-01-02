const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new ESLintPlugin({ fix: true, failOnWarning: true })],
  output: {
    filename: "bundle.js",
    library: "ltree",
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
};
