/*const fs = require('fs');
const path = require('path');
const dir = './Logs';

/*if(fs.existsSync(dir)){
    fs.readdir(dir,(err,files)=>{
        if(err){console.log(err)}
        for (const file in files){
            let filename = 'log'+file+'.txt';
            fs.unlink(path.join(dir,filename),err=>{
                if(err){console.log(err)}
                console.log("delete files...."+filename);
            })
        }

        fs.rmdirSync(dir);
    })
       
}*/

const fs = require("fs")
const path = require("path")
const dir = './Logs';

const removeFiles = async () => {
    if(fs.existsSync(dir)){
    fs.readdir(dir,(err,files)=>{
        if(err){console.log(err)}
        for (const file in files){
            let filename = 'log'+file+'.txt';
            fs.unlink(path.join(dir,filename),err=>{
                console.log("delete files...."+filename);
            })
        }
    })
       
}
}

 
const removeDir = async function() {
    await removeFiles()
    const dir = path.join(__dirname, "Logs") 
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir)
        
        if (files.length > 0) {
        files.forEach(function(filename) {
            if (fs.statSync(dir + "/" + filename).isDirectory()) {
                removeDir(dir + "/" + filename)
            } else {
                fs.unlinkSync(dir + "/" + filename)
            }
        })
        fs.rmdirSync(dir)
        } else {
        fs.rmdirSync(dir)
        }
    } else {
         console.log("Directory path not found.")
    }
}
 

removeDir();
