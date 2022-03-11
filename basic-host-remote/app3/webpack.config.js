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
    port: 3003,
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
      name: 'app3',
      library: { type: 'var', name: 'app3' },
      filename: 'app3-modules.js',
      exposes: {
        './Button3': './src/Button',
        './app3React': require.resolve('react'),
      },
      shared: { react: {  singleton: true, shareScope: "test" }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
