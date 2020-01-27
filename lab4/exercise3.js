const process = require('process');

setInterval(()=>{
    process.exit();
},1000);
process.on('exit',function(){
    console.log('Process on exit: '+process.uptime());
})
process.on('SIGINT', function() {
    console.log("Process on signal interrupt: "+process.uptime());
});