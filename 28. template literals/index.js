/* template literals = delimited with (`)
        instead of double or single quotes
        allows embedded variables and expressions


    pythonis - format-s gavs
*/

let userName = 'luka';
let items = 3;
let total = 75;


// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $${total}`);



// console.log('hello', userName);
// console.log('you have', items, 'items in your cart');
// console.log('your total is $', total);


let text = 
`Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;

// console.log(text);
document.getElementById('myLabel').innerHTML = text