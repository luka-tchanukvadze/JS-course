// 2d array = an array of arrays

let fruits = ['apples', 'oranges', 'bananas'];
let vegetables = ['carrots', 'onions', 'potatoes'];
let meats = ['eggs', 'chicken', 'fish'];

let groceryList = [fruits, vegetables, meats];

groceryList[2][0] = 'steak';

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}