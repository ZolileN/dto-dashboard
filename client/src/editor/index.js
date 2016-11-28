if (process.env.NEW_RELIC_LICENSE_KEY) {
  require('newrelic');
}

import './styles/main';

import './scripts/main';

// // check if HMR is enabled
if (module.hot) {
  // accept itself
  module.hot.accept();
}
