const webpack = require('webpack');
const path    = require('path');

const nodeExternals = require('webpack-node-externals');

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

  externals: [nodeExternals()],

  resolve: {
    modulesDirectories: [
      PATHS.modules,
      PATHS.src,
    ],
  },

  target: 'node',

  output: {
    // sourcemap support for IntelliJ/Webstorm
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: PATHS.src,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
      },
    ]
  }
};
