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

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

module.exports = {
  debug: true,
  devtool: 'source-map',
  noInfo: false,

  resolve: {
    modulesDirectories: [
      PATHS.modules,
      PATHS.src,
    ],
  },

  entry: [
    path.join(PATHS.src, 'index.js'),
  ],

  target: 'web',

  output: {
    path: PATHS.dest,
    filename: 'bundle.js',
    publicPath: '/',
  },

  devServer: {
    colors: true,
    contentBase: PATHS.dest,
    historyApiFallback: true,
    port: 3000,
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new CopyWebpackPlugin([
      {
        from: path.join(PATHS.src, 'index.html'),
        to: path.join(PATHS.dest, 'index.html'),
      },
      {
        from: path.join(PATHS.src, 'static'),
        to: path.join(PATHS.dest, 'static'),
      },
    ], {
      copyUnmodified: true,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
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
