const path = require('path');

// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');


module.exports = function(config, env) {
  var config = genDefaultConfig(config, env);

  // Extend it as you need.

  config.module.loaders.push({
    test: /.scss$/,
    loaders: ["style", "css", "sass"],
    include: path.resolve(__dirname, '../')
  });

  config.resolve.extensions = [...config.resolve.extensions, ...['.scss']];


  return config;
};
