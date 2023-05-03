// setTimeout() = invokes a function a number of milliseconds
//      asynchroneous function (doesn't pause executution)

let item = 'cryptocurrency'
let price = 420.69

let timer1 = setTimeout(firstMessage, 3000, item, price)
let timer2 = setTimeout(secondMessage, 6000)
let timer3 = setTimeout(thirdMessage, 9000)

function firstMessage(item, price){
    alert(`Buy this ${item} for ${price}`)
}
function secondMessage(){
    alert('Bthis is not a scum')
}
function thirdMessage(){
    alert('do it')
}

document.getElementById('myButton').onclick = function(){
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    alert('thanks')
}