// static = belongs to the class, not the objects properties:
//          properties: useful for caches, fixed-configuration
//          methodes: useful for utility functions

// anything that static belongs to class not the objects


class Car{

    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }

    static startRace(){
        console.log('3...2...1...go!')
    }

    // startRace(){
    //     // this is non static
    //     console.log('3...2...1...go!')
    // }
}

const car1 = new Car('Mustang')
const car2 = new Car('Corvette')
const car3 = new Car('BMW')
const car4 = new Car('Ferrari')

// car1.startRace()
Car.startRace()

console.log(Car.numberOfCars)
// console.log(car2.numberOfCars)
// console.log(car3.numberOfCars)