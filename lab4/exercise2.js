const process = require('process');

console.log('OS platform: ' + process.platform);
console.log('Process architecture: '+ process.env['PROCESSOR_ARCHITECTURE']);
console.log('Node version: '+process.versions.node);
console.log('V8 version: '+process.versions.v8);
console.log('LibUV version: '+process.versions.zlib);
console.log('PID: '+process.pid);
console.log('Title: '+process.title);
console.log('Current Directory: '+process.cwd());