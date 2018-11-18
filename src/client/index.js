const io = require('socket.io-client');
const { EVENTS } = require('../common/constants');

const { SEND_EVENT } = EVENTS;

// TODO: use uri constant
const socket = io('http://localhost:3001');

socket.on(SEND_EVENT, (message) => {
  console.log(message);
});
