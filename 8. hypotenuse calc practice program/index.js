
let a;
let b;
let c;

// a = window.prompt('enter side a')
// a = Number(a);

// b = window.prompt('endter side b')
// b = Number(b)

// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c)

// console.log('side c:', c)

document.getElementById("submitButton").onclick = function() {
    a = document.getElementById('aTextBox').value;
    a = Number(a);
    
    b = document.getElementById('bTextBox').value;
    b = Number(b)
    
    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c)
    
    document.getElementById('cLabel').innerHTML = 'Side c:' + c;
    
}
