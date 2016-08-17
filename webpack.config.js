const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const DEV = process.env.NODE_ENV !== 'production';

const globals = {
  'process.env.NODE_ENV': DEV ? '"development"' : '"production"',
  __DEV__: DEV,
};

const devEntries = DEV
  ? [
    // For hot style updates
    // 'webpack/hot/dev-server',

    // 'webpack-hot-middleware/client',
    // The script refreshing the browser on none hot updates
    // 'webpack-dev-server/client?http://localhost:8080',
  ] : [];

const devPlugins = [
  new webpack.DefinePlugin(Object.assign({}, globals, { 'process.env.BROWSER': true })),
  new webpack.optimize.OccurenceOrderPlugin(),
  // new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

const buildPlugins = [
  // Search for equal or similar files and deduplicate them in the output
  // https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
  new webpack.optimize.DedupePlugin(),

  // Minimize all JavaScript output of chunks
  // https://github.com/mishoo/UglifyJS2#compressor-options
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
    },
  }),

  // A plugin for a more aggressive chunk merging strategy
  // https://webpack.github.io/docs/list-of-plugins.html#aggressivemergingplugin
  new webpack.optimize.AggressiveMergingPlugin(),
];

const localName = `localIdentName=${DEV ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]'}`;
const cssModulesConfiguration = `modules&importLoaders=1&${localName}`;

module.exports = {
  entry: []
    .concat('babel-polyfill')
    .concat('isomorphic-fetch')
    .concat(devEntries)
    .concat('./src/index.js'),
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devtool: DEV ? 'cheap-module-eval-source-map' : false,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      {
        test: /\.sass$/,
        loader: `style!css?${cssModulesConfiguration}!postcss!sass?indentedSyntax`,
      },
    ],
  },
  target: 'web',
  plugins: DEV ? devPlugins : buildPlugins,
  cache: DEV,
  debug: DEV,
  stats: {
    colors: true,
    reasons: DEV,
    hash: DEV,
    version: DEV,
    timings: true,
    chunks: DEV,
    chunkModules: DEV,
    cached: DEV,
    cachedAssets: DEV,
  },
  resolve: {
    root: path.resolve(__dirname, './src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
};
