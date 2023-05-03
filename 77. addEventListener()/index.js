// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// even the same event taht invokes different functions


// true outers aamoqmedebs jer

const innerDiv = document.getElementById('innerDiv')
const outerDiv = document.getElementById('outerDiv')


innerDiv.addEventListener('click', changeBlue)
outerDiv.addEventListener('click', changeBlue, true)


function changeBlue(){
    alert(`you selectd ${this.id}`)
    this.style.backgroundColor = 'lightblue'
}





// innerDiv.addEventListener('mouseover', changeRed)
// innerDiv.addEventListener('mouseout', changegreen)

// function changeRed(){
//     innerDiv.style.backgroundColor = 'red'
// }
// function changegreen(){
//     innerDiv.style.backgroundColor = 'lightgreen'
// }