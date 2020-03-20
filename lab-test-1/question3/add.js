const fs = require('fs');
const process = require('process');
const dir = './Logs';

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    try{
        process.chdir(dir);
    }catch(err){
        console.log('chdir: '+error);
    }   
    
    
    for(let x = 0; x<10;x++){
        let filename = 'log'+x+'.txt';
        fs.writeFile(filename,'Output file '+x+1,function(err){
            if(err){
                console.log(err)
            }
            console.log(filename)
        })
    }
}