const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalRemotesPlugin = require('external-remotes-plugin')
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
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
  //http://localhost:3002/remoteEntry.js
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      remotes: {
        // app3: `app3@http://localhost:3006/app3-modules.js`,
        // app2: `app23@${getRemoteEntryUrl(3002)}`,
        app2: `app23@[window.app2Url]/app2-modules.js`,
        app4: `app4@[window.app4Url]/app4-modules.js`,
        vue2: `vue2App@http://localhost:5001/remoteEntry.js`
      },
      shared: { 
        react: { singleton: true, shareScope: 'default', packageName: 'react', requiredVersion: '16.12.0'}, 
        'react-dom': { singleton: true }
     },
     shareScope: 'app1'
    }),
    new ExternalRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

function getRemoteEntryUrl(port) {
  const { CODESANDBOX_SSE, HOSTNAME = '' } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!CODESANDBOX_SSE) {
    return `//localhost:${port}/remoteEntry1.js`;
  }

  const parts = HOSTNAME.split('-');
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}
