import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import WatchMissingNodeModulesPlugin from 'react-dev-utils/WatchMissingNodeModulesPlugin';

import * as CONFIG from './_config';
import webpackConfig from './webpack.config.devserver';


function clearConsole() {
  // This seems to work best on Windows and other systems.
  // The intention is to clear the output so you can focus on most recent build.
  process.stdout.write('\x1bc');
}

let devServerPublicPath = `http://${CONFIG.WEBPACK_HOST}:${CONFIG.WEBPACK_PORT}/`;
webpackConfig.output.publicPath = devServerPublicPath;

// same as --inline
// webpack/hot/dev-server will reload the entire page if the HMR update fails.
// If you want to reload the page on your own, you can add
// webpack/hot/only-dev-server to the entry point instead.
for(let [key, value] of Object.entries(webpackConfig.entry)) {
	if (!Array.isArray(value)) {
		throw new Error('Entry value must be an array');
	}
	value.unshift(
	  `webpack-dev-server/client?${devServerPublicPath}`,
	  'webpack/hot/dev-server',    // reload if HMR fails
    // require.resolve('react-dev-utils/webpackHotDevClient'),  // todo !!
      // app entry point is not required here because it is carried across
      // from webpack.config, a la unshift.
	);
}

// same as: --hot
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
webpackConfig.plugins.push(new CaseSensitivePathsPlugin());
webpackConfig.plugins.push(new WatchMissingNodeModulesPlugin(CONFIG.DIR_NPM));

// create an instance of webpack compiler
var devCompiler = webpack(webpackConfig);

// create an instance of webpack-dev-server
let devServer = new WebpackDevServer(devCompiler, {
  publicPath: devServerPublicPath,
  hot: true,
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: false,
  noInfo: false,
  quiet: false,
  stats: {
	  colors: true
  },
  // Reportedly, this avoids CPU overload on some systems.
  watchOptions: {
    ignored: /node_modules/
  }
});

// bind the server to location and callback
devServer.listen(CONFIG.WEBPACK_PORT, CONFIG.WEBPACK_HOST, function (err) {
  if (err) {
	  console.log(err);
  }
  clearConsole();
  console.log(`Listening at ${devServerPublicPath}... . Develop at http://localhost:3000.`);
});


export default devServer;
