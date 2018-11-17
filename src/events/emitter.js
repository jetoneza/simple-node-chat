const EventEmitter = require('events');

class ChatEventEmitter extends EventEmitter {}

const emitter = new ChatEventEmitter();

// TODO: Create event handlers

module.exports = emitter;
