import './styles/main';

// delay execution here because of a weird behaviour with css being injected
// late in webpack-dev-server
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    require('./scripts/main');
  }, 300);
} else {
  require('./scripts/main');
}
