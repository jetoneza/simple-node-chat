const SocketIO = require('socket.io');
const { getConfig } = require('../config');
const { EVENTS } = require('../common/constants');

const { SEND_EVENT } = EVENTS;

const port = getConfig('port');

const io = new SocketIO(port);

io.on('connection', socket => {
  console.log('A client has connected.');

  socket.emit(SEND_EVENT, 'Welcome to node simple chat!');

  socket.on('disconnect', () => {
    console.log('A client has disconnected.');
    // TODO: Implement disconnect
  });
});

module.exports = io;
