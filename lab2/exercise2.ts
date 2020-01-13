const makeUpperCase = function(words){
    for(let index of words){
        index.toUpperCase();
    }
    return words;
}
const sortWords = function(words){
    return new Promise(function (resolve, reject){
        for(let word of words){
            if(typeof word != 'string'){
                reject("Not all item on the array are strings")
            }
        }
        for(let x = 0; x<words.length(); x++){
            let words1 = words[0];
            if(words[x][0] > words1[0]){
                words.unshift(words[x][0])
            }
        }  
        return words; 
    })
}

const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixedArray = ['anarchy', 99, true]

makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then((result)=>console.log(result))
    .catch(error => console.log(error))

makeUpperCase(mixedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))