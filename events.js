const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(()=>{
      console.log('please turn of the motor! Its a gentle reminder')
  },10000);
});

myEmitter.emit('WaterFull')