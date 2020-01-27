const { fork } = require('child_process');

const forked = fork('compute.js');
forked.on('message', (msg)=>{
    console.log('Long computation result: '+msg);
})
forked.send('message');