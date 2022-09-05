const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "production",
  node: {
    __dirname: false
  },
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        }
      }
    ]
  }
};