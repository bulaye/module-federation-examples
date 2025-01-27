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
    port: 3002,
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
      name: 'app24',
      library: { type: 'umd', name: 'app23' },
      filename: 'app2-modules.js',
      exposes: {
        './Button2': './src/Button',
      },
      shared: { 
        'react': { singleton: true, shareScope: 'default' }, 
        'react-dom': { singleton: true } 
      },
      shareScope: "test"
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
