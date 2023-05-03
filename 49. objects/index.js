/* object = a group of properties and and methods
            properties = what an object has
            methods = what an object can do
            use . to access properties/methods
*/

const car = {
    model:'mustang',
    color:'red',
    year:2023,

    drive : function(){
        console.log('you drive the car')
    },

    brake : function(){
        console.log('you step on the brakes')
    },
}

const car2 = {
    model:'corvette',
    color:'blue',
    year:2024,

    drive : function(){
        console.log('you drive the car')
    },

    brake : function(){
        console.log('you step on the brakes')
    },
}


console.log(car2.model)
console.log(car2.color)
console.log(car2.year)

car2.drive();
car2.brake();


