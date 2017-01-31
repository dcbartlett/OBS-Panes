var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: { path: 'public', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /.svg$/,
        loader: 'svg-react'
      }, {
        test: /\.css$/,
        loaders: [
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  },
};
