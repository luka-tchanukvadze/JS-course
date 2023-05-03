// type conversion = change the datatype of a value to another
// (strings, numbers, booleans)

// ra ricxvi ar aris da ricxvad aqcev daiwereba nan

let age = window.prompt("How old are you?")

console.log(typeof age);

age = Number(age)
console.log(typeof age);
age += 1;

// es stringi iqneba
console.log("Happy birthday, you are", age, 'years old')


let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);

// empty tu ar iqneba true daiwereba
z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

