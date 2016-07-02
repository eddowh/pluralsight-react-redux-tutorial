const webpack = require('webpack');
const path    = require('path');

// 3rd party webpack plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Path variables
const ROOT_PATH = path.resolve(__dirname)
const PATHS = {
  root    : ROOT_PATH,
  src     : path.join(ROOT_PATH, 'src'),
  modules : path.join(ROOT_PATH, 'node_modules'),
  dest    : path.join(ROOT_PATH, 'dist'),
}


module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,

  resolve: {
    modulesDirectories: [
      PATHS.modules,
      PATHS.src,
    ],
  },

  entry: [
    'webpack-hot-middleware/client?reload=true', // reloads if hmr fails
    path.join(PATHS.src, 'index.js'),
  ],

  target: 'web',

  output: {
    path: PATHS.dest,
    filename: path.join('static', 'bundle.js'),
    publicPath: '/',
  },

  devServer: {
    colors: true,
    contentBase: PATHS.src,
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3000,
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(PATHS.src, 'static'),
        to: path.join(PATHS.dest, 'static'),
      },
    ], {
      copyUnmodified: true,
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: PATHS.src,
        loaders: ['babel'],
      },
      {
        test: /(\.css)$/,
        loaders: ['style', 'css'],
      },
    ]
  }
};
