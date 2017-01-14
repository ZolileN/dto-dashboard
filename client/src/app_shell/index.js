import 'babel-polyfill';

import './styles/main'
import './scripts/main';

import './../_shared/images/editor-logo.svg'


// // check if HMR is enabled
if (module.hot) {
  // accept itself
  module.hot.accept();
}
