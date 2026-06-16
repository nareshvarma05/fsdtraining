const events = require('events');

const emitter = new events();

emitter.on('greet', () => {
    console.log('Hello Naresh!');
});

emitter.emit('greet');