const HTMLWeebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: './tsconfig.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@adapters': path.resolve(__dirname, '../../adapters/'),
      '@domains': path.resolve(__dirname, '../../domains/'),
      '@frameworks': path.resolve(__dirname, '../../frameworks/'),
      '@hooks': path.resolve(__dirname, '../../frameworks/web/hooks/'),
      '@di': path.resolve(__dirname, './di/index.ts'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWeebPackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
