import webpack from 'webpack';
import BellOnBundlerErrorPlugin from 'bell-on-bundler-error-plugin';
import autoprefixer from 'autoprefixer';
import sassLintPlugin from 'sasslint-webpack-plugin';

import * as CONFIG from './_config';
const projectName = require('./../../package').name;

// spawn a Dashboard in Terminal
// https://github.com/FormidableLabs/webpack-dashboard
import DashboardPlugin from 'webpack-dashboard/plugin';


let webpackConfig = {
	name: projectName,
	bail: true,
	debug: true,
	devtool: 'cheap-module-eval-source-map',        // or 'eval', or ...
	context: CONFIG.DIR_SRC,
    entry: {
      ['dashboard']: [`./dashboard`],
      ['app_shell']: [`./app_shell`],
      ['editor']: [`./editor`],
      ['login']: [`./login`],
    },
	output: {
	  path: CONFIG.DIR_DIST,
      // Add /* filename */ comments to generated require()s in the output.
      pathinfo: true,
      // This does not produce a real file. It's just the virtual path that is
      // served by WebpackDevServer in development. This is the JS bundle
      // containing code from all our entry points, and the Webpack runtime.
	    filename: 'javascripts/[name].js',       // relative     - determines output file
      // In development, we always serve from the root. This makes config easier.
      publicPath:  `/`,     // Web root. publicPath + filename must equal resource path in dev server
      // publicPath:  `http://${CONFIG.WEBPACK_HOST}:${CONFIG.WEBPACK_PORT}/` could be this
      sourceMapFilename: "javascripts/[name].js.map"
	},
  externals: {
  },
	module: {
		preLoaders: [
      {
        test: /client\/src\/\.(js)$/,
        loader: "eslint"
      }
		],
		loaders: [
			{
				test: /\.(js|json)$/,
				loaders: ['babel'],
				exclude: /node_modules/
			},
			{
        test: /\.(scss)$/,
				loader: 'style!css?&sourceMap!postcss!resolve-url!sass?sourceMap'
			},
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loaders: [
          "file?name=images/[name].[ext]?[hash]"
          // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ]
      }
		]
	},
	plugins: [
    new DashboardPlugin(),

    // new sassLintPlugin({ // todo
    //   config: './../.sass-lint.yml'
    // }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(CONFIG.ENV),
          __DEV__: true
		}),
		new BellOnBundlerErrorPlugin()
	],
	resolve: {
		extensions : ['', '.js', '.scss']
	},
	node: {
		fs: 'empty'
	},

  postcss : [
    autoprefixer()
  ],
	sassLoader: {
		precision: 8,
		includePaths: [
			CONFIG.DIR_SRC,
			CONFIG.DIR_NPM
		],
		sourceMap: true,
		lineNumbers: true,
		bundleExec: true,
		data: `$env:  ${CONFIG.ENV === 'production' ? 'production' : 'development'};`
	}
};

export default webpackConfig;
