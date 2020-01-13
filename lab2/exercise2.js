var makeUpperCase = function (words) {
    return new Promise(function (resolve, reject) {
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        if(typeof words_1[_1] != string){
            reject("Not all item on the array are strings")
        }else{
        var index = words_1[_i];
        index.toUpperCase();
        }
    }
    return words;
});
};
var sortWords = function (words) {
    return new Promise(function (resolve, reject) {
        for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
            var word = words_2[_i];
            if (typeof word != 'string') {
                reject("Not all item on the array are strings");
            }
        }
        for (var x = 0; x < words.length(); x++) {
            var words1 = words[0];
            if (words[x][0] > words1[0]) {
                words.unshift(words[x][0]);
            }
        }
        return words;
    });
};

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
