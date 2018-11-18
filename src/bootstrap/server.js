const { getArguments, parseArguments } = require('../utils');
const { getConfig } = require('../config');

module.exports = (callback) => {
  const args = getArguments();

  args.forEach(arg => {
    parseArguments(arg);
  });

  const server = require('../server');

  if (typeof callback === 'function') {
    const host = getConfig('host');
    const port = getConfig('port');

    callback({
      port,
      host,
    });
  }
}
