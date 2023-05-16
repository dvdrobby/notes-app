const common = require('./webpack.common.js');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
  ],
});