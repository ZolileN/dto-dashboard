import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import BellOnBundlerErrorPlugin from 'bell-on-bundler-error-plugin';
import autoprefixer from 'autoprefixer';

import * as CONFIG from './client/config/_config';
const projectName = require('./package').name;
const DEBUG = !process.argv.includes('--release');


if (!DEBUG) {
   console.log('PREPARING FOR PRODUCTION.');
}

let ExtractSass = new ExtractTextPlugin("stylesheets/[name].css", {
  publicPath: CONFIG.DIR_DIST,
  allChunks: false
});

let webpackConfig = {
  name: projectName,
  // don't attempt to continue if there are errors
  bail: true,
  debug: DEBUG,
  devtool: 'source-map', //DEBUG ? 'source-map' : 'none',
  target: 'web',
  context: CONFIG.DIR_SRC,
  entry: {
    ['dashboard']: [`./dashboard`],
    ['app_shell']: [`./app_shell`],
    ['editor']: [`./editor`],
    ['login']: [`./login`],
  },
  output: {
    filename: 'javascripts/[name].js',
    path: CONFIG.DIR_DIST,    // absolute - determines output dir
    sourceMapFilename: "javascripts/[name].js.map"
  },
  // When you want to import a global API into the bundle
  externals: {
  },
  module: {
    // Pre-process files as they are loaded by "import" statements.
    // Similar to a gulp task.
    // Chains are applied right to left,
    // Can accept options by query params or by object syntax below,
    // see "loader options"
    preLoaders: [
      {
        test: /client\/src\/\.(js)$/,
        loader: "eslint"
      }
    ],
    loaders: [
      {
        test: /\.(js)$/,
        loaders: ['babel'],
        exclude: [
          CONFIG.DIR_NPM,
          CONFIG.DIR_TEST
        ],
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractSass.extract('style', `css?${DEBUG ? 'sourceMap': ''}!postcss!resolve-url!sass?sourceMap`)
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loaders: [
          "file?name=/images/[name].[ext]?[hash]"
          // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ]
      }
    ]
  },
  // Add functionality typically related to bundles in webpack
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? 'production' : JSON.stringify(CONFIG.ENV),
      __DEV__: DEBUG
    }),
    new BellOnBundlerErrorPlugin(),
    ExtractSass
  ],
  // Options affecting the resolving of modules
  resolve: {
    extensions : ['', '.js', '.scss'],
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },


  //
  // loader options
  //

  postcss : [
    autoprefixer()
  ],
  sassLoader: {
    precision: 8,
    includePaths: [
      CONFIG.DIR_SRC,
      CONFIG.DIR_NPM
    ],
    sourceMap: DEBUG,
    lineNumbers: DEBUG,
    bundleExec: true,
    data: `$env:  ${CONFIG.ENV === 'production' ? 'production' : 'development'};`
  }
};

if (!DEBUG) {
  webpackConfig.plugins.push(
    // Merge all duplicate modules
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

export default webpackConfig;
