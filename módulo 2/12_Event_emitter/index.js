const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('Durante');
});
eventEmitter.on('Opa', () => {
    console.log('Então posso ter vários');
});
eventEmitter.emit('Opa');
console.log('Antes');
eventEmitter.emit('start');
console.log('Depois');
eventEmitter.emit('Opa'); // tem que ser identico a string