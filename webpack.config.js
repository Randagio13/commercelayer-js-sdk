const path = require("path");
require('@babel/register')

// Development Bundle Configuration
const developmentBundle = {
  mode: "development",
  entry: "./index.js",
  devtool: "inline-source-map",
  // devtool: "source-map",
  devServer: {
    contentBase: "./test/web"
  },
  output: {
    filename: "commercelayer-sdk.dev.js",
    path: path.resolve(__dirname, "dist"),
    library: "commercelayer"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

// Production Bundle Configuration
const productionBundle = {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "commercelayer-sdk.min.js",
    path: path.resolve(__dirname, "dist"),
    library: "commercelayer"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

module.exports = [developmentBundle, productionBundle];
