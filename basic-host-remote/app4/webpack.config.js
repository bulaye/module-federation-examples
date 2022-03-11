const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3004,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app334',
      library: { type: 'umd', name: 'app4' },
      filename: 'app4-modules.js',
      exposes: {
        './Button4': './src/Button',
      },
      shared: { 
        'react': { import: "react", shareKey: 'react',singleton: true },
        'react-dom': { import: "react-dom", shareKey: 'react-dom', singleton: true } 
      },
      shareScope: "test"
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
