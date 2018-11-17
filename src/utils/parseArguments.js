const { setConfig } = require('../config');

module.exports = (arg) => {
  const [ key, value ] = arg.split('=');

  setConfig(key, value);
};
