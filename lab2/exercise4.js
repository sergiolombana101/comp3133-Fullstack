var delayedPromise = function (number) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(number*number);
        }, 5000);
    });
};

async function asynPromise(number){
    const result = await delayedPromise(number)
}
delayedPromise(5)
    .then(function (result) { return console.log(result); });

asynPromise(6)
    .then(function (result) {return console.log(result)});
