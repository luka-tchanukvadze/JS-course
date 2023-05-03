// nested loop = a loop inside of another loop

let symbol = window.prompt('enter a symbol to use')
let rows = window.prompt('enter # of rows');
let columns = window.prompt('enter # of columns')

for(let i = 1; i <= rows; i += 1){
    for(let j = 1; j <= columns; j += 1){
        document.getElementById('myRectangle').innerHTML += symbol;
    }
    document.getElementById('myRectangle').innerHTML += "<br>";
}




// for(let i = 1; i <= 3; i += 1){
//     for(let j = 1; j <= 3; j += 1){
//         console.log(j);
//     }
// }