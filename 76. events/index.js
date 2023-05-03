/* html fileshi tavsistavad imushavebs

*/




// const element = document.getElementById('myButton')
// element.onclick = doSomething

// const element = document.body
// element.onload = doSomething

// const element = document.getElementById('myText')
// element.onchange = doSomething

const element = document.getElementById('myDiv')
element.onmouseover = doSomething
element.onmouseout = doSomethingEles
element.onmousedown = doSomethingdown
element.onmouseup = doSomethingup



function doSomething(){
    // alert('you did something')
    element.style.backgroundColor = 'red'
}

function doSomethingEles(){
    // alert('you did something')
   
    element.style.backgroundColor = 'green'
}

function doSomethingdown(){
    element.style.backgroundColor = 'orange'
}
function doSomethingup(){
    element.style.backgroundColor = 'blue'
}