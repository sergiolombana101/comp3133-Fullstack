const resolvedPromise = () => {
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            let success = {'message':'delayed success!'}
            resolve(success);
        },500)
    })
}
const rejectedPromise = () => {
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            try{
                rejected({'error': 'delayed Exception!'});
            } catch (e) {
                console.error(e);
            }
        },500)
    })
}


resolvedPromise()
    .then((result)=>console.log(result))
    .catch(error => console.log(error))
rejectedPromise()
    .then((result)=>console.log(result))
    .catch(error=> console.log(error))