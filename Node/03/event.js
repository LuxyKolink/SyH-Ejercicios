const EventEmitter = require('node:events');
const logEvents = require('./utils/logEvents')

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => {
    logEvents(msg)
});

myEmitter.emit('log', 'log event emitted!');