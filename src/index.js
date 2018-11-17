const { getArguments, parseArguments } = require('./utils');
const { getConfig, setConfig } = require('./config');

const args = getArguments();

args.forEach(arg => {
  parseArguments(arg);
});

console.log('HOST:', getConfig('host'));
console.log('PORT:', getConfig('port'));
