/* ternary operator = shortcut for an if/else statement
        takes 3 operands

        1. a condition with ?
        2. expression if True :
        3. expression if Fales


    condition ? exprIfTrue : exprIfFalse
*/

checkWinner(true);

function checkWinner(win){
    win ? console.log('you win!') : console.log('you lose!')
}



let adult = checkAge(17);
console.log(adult);

function checkAge(age){
     
    return age >= 18 ? true : false
}



// function checkAge(age){
//     if(age >= 18){
//         return true;
//     }

//     else{
//         return false;
//     }
// }