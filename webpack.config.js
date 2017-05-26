module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/src/dist",
    filename: "bundle.js",
  },
  devServer: {
    publicPath: "/dist",
    contentBase: "./src"
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    loaders: [{
      test: /\.ts/,
      loader: ['ts-loader'],
      exclude: /node_modules/
    }]
  }
};
