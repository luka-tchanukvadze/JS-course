// this = reference to a particular object
//       the object depends on the immediate context

const car1 = {
    model:'mustang',
    color:'red',
    year:2023,

    drive : function(){
        console.log(`you drive the ${this.model}`);
    }
   
}

const car2 = {
    model:'corvette',
    color:'blue',
    year:2024,

    drive : function(){
        console.log(`you drive the ${this.model}`)
        // console.log(`you drive the ${car2.model}`)
    },

}

car1.drive();
car2.drive();



this.name = 'myCoolWindow'
console.log(this.name)