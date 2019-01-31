const path = require("path");


// Development Bundle Configuration
let developmentBundle = {
  mode: "development",
  entry: "./index.js",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./test/web"
  },
  output: {
    filename: "commercelayer-sdk.dev.js",
    path: path.resolve(__dirname, "dist"),
    library: "commercelayer"
  }
};


// Production Bundle Configuration
let productionBundle = {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "commercelayer-sdk.min.js",
    path: path.resolve(__dirname, "dist"),
    library: "commercelayer"
  }
};


module.exports = [
  developmentBundle,
  productionBundle
];
