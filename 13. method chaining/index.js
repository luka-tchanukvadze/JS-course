// method chaining = calling one method after another
//      in one continous line of code
// it is more clean and readable


let userName = 'luka';

// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// other way 
let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);