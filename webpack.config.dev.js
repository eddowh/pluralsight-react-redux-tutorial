const webpack = require('webpack');
const path    = require('path');

// Path variables
const ROOT_PATH = path.resolve(__dirname)
const PATHS = {
  root    : ROOT_PATH,
  src     : path.join(ROOT_PATH, 'src'),
  modules : path.join(ROOT_PATH, 'node_modules'),
  dest    : path.join(ROOT_PATH, 'static')
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
    filename: path.join('js', 'bundle.js'),
  },

  devServer: {
    colors: true,
    contentBase: PATHS.dest,
    inline: true,
    hot: true,
    port: 3000,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: PATHS.src,
        loaders: [
          'babel',
        ],
      }
    ]
  }
};
