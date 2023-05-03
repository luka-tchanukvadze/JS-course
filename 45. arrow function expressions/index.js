// arrow function = compact alternative to a traditional function
//   =>

//you do need curly braces if your function uses more than 1 statement

// if u dont have an argument u only need ()
// 1 argument ex: userName
// 2+ u need ()

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));




const percent = (x, y) => x / y * 100;

console.log(`${percent(75, 120)}%`)



const greeting = (userName) => console.log(`hello ${userName}`);

greeting('bro')