const _setImmediate = setImmediate;
const _clearImmediate = clearImmediate;
const _require = require;
window.require = _require;
process.once('loaded', () => {
  global.setImmediate = _setImmediate;
  global.require = _require;
  window.require = _require;
});