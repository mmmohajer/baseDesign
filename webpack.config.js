const Dotenv = require("dotenv-webpack");

const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fse = require("fs-extra");

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy images", function () {
      fse.copySync(
        "./src/assets/images/html-Images",
        "./dist/assets/images/html-Images"
      );
    });
  }
}

let sassConfig = {
  test: /\.scss$/i,
  use: ["css-loader", "sass-loader"],
};

let config = {
  resolve: {
    alias: {
      Root: path.resolve(__dirname, "./"),
      Pages: path.resolve(__dirname, "src/pages/"),
      Components: path.resolve(__dirname, "src/components/"),
      Styles: path.resolve(__dirname, "src/assets/styles"),
      Images: path.resolve(__dirname, "src/assets/images"),
      Constants: path.resolve(__dirname, "src/constants"),
      Utils: path.resolve(__dirname, "src/utils"),
      TestComponents: path.resolve(__dirname, "src/TestComponents"),
    },
  },
  plugins: [
    new Dotenv({
      path: "./.env",
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
      prefix: "process.env.",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      sassConfig,
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/transform-runtime"],
          },
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        include: path.join(__dirname, "src/assets/images/js-Images"),
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 25000,
            },
          },
        ],
      },
    ],
  },
};

if (currentTask == "dev") {
  config.entry = "./src/index.js";
  sassConfig.use.unshift("style-loader");
  config.output = {
    filename: "bundled.js",
    path: path.resolve(__dirname, "src"),
  };
  config.devServer = {
    static: "./src",
    port: 3000,
    hot: true,
    host: "0.0.0.0",
    historyApiFallback: true,
    allowedHosts: ["makeclient.ngrok.io"],
  };
  config.mode = "development";
}

if (currentTask == "build") {
  config.entry = "./src/index.js";
  sassConfig.use.unshift(MiniCssExtractPlugin.loader);
  config.output = {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "./",
    libraryTarget: "commonjs2",
  };
  config.mode = "production";
  config.optimization = {
    splitChunks: { chunks: "all" },
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  };
  config.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new RunAfterCompile()
  );
}

module.exports = config;
