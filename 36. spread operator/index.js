/* 
    spread operator = allow an iterable such as an array or string
  ...              to be expanded in places where zero or more arguments 
                expected (unpacks the elemets)
*/

// let userName = 'Bro Code';


/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(...numbers);

let maximum = Math.max(...numbers);
console.log(maximum)
*/

let class1 = ['Spongebob', 'Patric', 'Sandy'];
let class2 = ['Squidward', 'Mr.Krabs', 'Plankton'];

// class1.push(class2);
class1.push(...class2);

console.log(...class1)