const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const isProd = !process.env.NODE_ENV === "production";
console.log(isProd);
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
  performance: {
    hints: false,
    maxEntrypointSize: 200000,
    maxAssetSize: 200000
  },
  optimization: {
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()],

    splitChunks: {
      chunks: "all",
      minSize: 0,
      name: "commons"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "index.html"),
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: isProd ? "static" : "disabled"
    })
  ]
};
