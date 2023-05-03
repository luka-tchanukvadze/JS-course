/* do while loop = do something,
    then check the condition,
    repeat if condition is true */

let userName;

// there is better way
// userName = window.prompt('enter your name');

do{
    userName = window.prompt('enter your name');
}while(userName == '')

console.log('hello', userName);