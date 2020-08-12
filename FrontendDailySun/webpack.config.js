const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    port: 9000,
    host: "192.168.0.108"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,

        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: [/\.pug/],
        exclude: [/node_modules/, /public/, /dist/],
        loaders: ["html-loader", "pug-html-loader"]
      },
      {
        test: /\.html?$/i,
        exclude: [/node_modules/, /public/, /dist/, /css/],
        use: "html-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff|eot|woff2)$/i,
        exclude: [/node_modules/, /public/, /dist/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "index.html"),
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};
