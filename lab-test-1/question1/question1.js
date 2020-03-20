const lowerCaseWords = (array)=>{
    let returnArr = [];
    return new Promise((resolve,reject) => {
        for(let index of array){
            if(typeof index == 'string'){
                let str = index.toLowerCase();
                returnArr.push(str);
            }
        }
        if(returnArr.length == 0){
            reject("No strings in the array")
        }
        resolve(returnArr);
    })
}

const mixedArray = ['PIZZA',10,true,25,false,'Wings']
lowerCaseWords(mixedArray)
    .then(result=>console.log(result))
    .catch(error=>console.log(error))