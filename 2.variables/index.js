// a variable is a container for storing Data
// a variable behaves as if it was the value that it contains

// two steps:
// 1. declaration (var, let, const)
// 2. assignment (= assignmet operator)

let age;
// age = 21;
age = '21';

age = age + 1;

let firstName = "Bro";
let student = true;

age = age + 3

console.log('you are', age, 'years old');
console.log(firstName, 'wow');
console.log(student, 'ok');


document.getElementById('p1').innerHTML = 'hello ' + firstName;
document.getElementById('p2').innerHTML = 'u are ' + age;
document.getElementById('p3').innerHTML = 'enrlled ' + student;