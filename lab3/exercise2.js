const buff = Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]);
const eventEmitter = require('events');

const myEmitter = new eventEmitter();

function convert(){
    for(let i =0; i<buff.length;i++){
        console.log(buff[i]);
    }
    console.log("Buffer converted");
}

myEmitter.on('convert', convert)
myEmitter.emit('convert');

