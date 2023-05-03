// constructor = a special method of a class, 
//              accepts argumetns and assigns properties

class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa
    }

    study(){
        console.log(`${this.name} is studying`)
    }
}

const sudent1 = new Student('Spongebob', 30, 3.2);
const sudent2 = new Student('Patric', 35, 1.5);


console.log(sudent1.name)
console.log(sudent1.age)
console.log(sudent1.gpa)

sudent1.study();

console.log(sudent2.name)
console.log(sudent2.age)
console.log(sudent2.gpa)

sudent2.study();