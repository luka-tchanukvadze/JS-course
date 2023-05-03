// array.reduce() = reduces an array to a single value
// ex: sum up

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut)

console.log(`The total is: $${total}`)

function checkOut(total, element){
    return total + element;
}