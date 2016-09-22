const path = require('path');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src', 'static'),
    inline: true,
    port: 8080,
  },
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.jsx',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};