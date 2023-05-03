// function expression = function without a name (anonymous fuction)
//              avoid polluting the global scope with names 
//              write it, the forget about it

let count = 0;


document.getElementById('increaseButton').onclick = function(){
    count += 1;
    document.getElementById('myLabel').innerHTML = count;
}

document.getElementById('decreaseButton').onclick = function(){
    count -= 1;
    document.getElementById('myLabel').innerHTML = count;
}





/*
function increaseCount(){
    count += 1;
    document.getElementById('myLabel').innerHTML = count;
}

function decreaseCount(){
    count -= 1;
    document.getElementById('myLabel').innerHTML = count;
}
*/









// const greeting = function(){
//     console.log('hello');
// }

// greeting();