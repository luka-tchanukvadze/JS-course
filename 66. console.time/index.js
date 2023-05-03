// console.time() = starst a time you can use to track
//          how long an operation takes
//           give each timer a unique name.


// start
console.time('Response time')
 
alert('CLICK THE OK BUTTON!')
setTimeout(() => console.log('hello'), 3000)

// end
console.timeEnd('Response time')