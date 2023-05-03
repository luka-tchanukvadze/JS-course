// error = object with a description of something went wrong

// throw = executes a user-defined error

//  ex:
//      can't open a file
//      lose connection
//      user types incorrect input
//      typeError

try{
    let x = window.prompt('enter a number')
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number"

    if(x == '') throw 'that was empty'

    console.log(`${x} is a number`)
}
catch(error){
    console.log(error)
}
finally{
    console.log('this always executes')
}