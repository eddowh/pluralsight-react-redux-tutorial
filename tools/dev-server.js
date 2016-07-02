const path = require('path');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');

const webpackConfig = require('../webpack.config.dev');
const bundler = webpack(webpackConfig);

browserSync({
  open: false,
  server: {
    baseDir: 'src',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          colors: true,
        },
      }),
      webpackHotMiddleware(bundler),
      historyApiFallback(),
    ]
  },
  files: [
    'src/*.html'
  ]
});

