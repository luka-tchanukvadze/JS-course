// gamravlebit marto 0-5. floor damrgvaleba
let x;
let y;
let z;


// let x = Math.floor(Math.random() * 6) + 1;
// let y = Math.floor(Math.random() * 6) + 1;
// let z = Math.floor(Math.random() * 6) + 1;

// console.log(x);
// console.log(y);
// console.log(z);

document.getElementById('rollButton').onclick = function() {
    let x = Math.floor(Math.random() * 6) + 1;
    let y = Math.floor(Math.random() * 6) + 1;
    let z = Math.floor(Math.random() * 6) + 1;

    document.getElementById('xlabel').innerHTML = x;
    document.getElementById('ylabel').innerHTML = y;
    document.getElementById('zlabel').innerHTML = z;
}