const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('working', () => {
    console.log('typing');
})

eventEmitter.emit('working');
