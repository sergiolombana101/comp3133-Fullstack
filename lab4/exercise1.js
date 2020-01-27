const fs = require('fs');
const process = require('process');

let path = process.cwd();
fs.readdir(path,function(err,files){
    if(err){
        return console.log('Unable to scan directory: '+err);
    }
    files.forEach(function(file){
        console.log(file);
    })
})
let args = process.argv.slice(2);
console.log('command arg-extension : '+args);