// promise = object that encapsulates the result of an asynchronous operation
//      let asynchronous methodes return values like synchronous methods
//      'I promise to return something in the future'

//  the STATE is 'pending' then: 'fulfilled' or 'rejected'
//  the RESULT is what can be returned'
//  2 parts poducing & consuming


const wait = time => new Promise(resolve => {
    setTimeout(resolve, time)

})


wait(3000).then(() => console.log('WOW Thanks for waiting'));


const promise1 = new Promise(resolve => {
    setTimeout(resolve, 5000)

})
promise1.then(() => console.log('Thanks for waiting'));







const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;
    
    if(fileLoaded){
        resolve('File loaded')
    }
    else{
        reject('File NOT loaded')
    }


})

promise.then(value => console.log(value))
        .catch(error => console.log(error))
