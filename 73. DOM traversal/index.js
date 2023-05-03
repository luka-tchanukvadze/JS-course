/* parent, child, siblings (previous, next)


// .firstELementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .presviousElementSibling
// .children[]
// Array.from(.children)


*/

// let elment = document.body
// // let child = elment.firstElementChild
// child.style.backgroundColor = 'lightgreen'

// let elment = document.body
// let child = elment.lastElementChild
// console.log(child)
// child.style.backgroundColor = 'lightgreen'

// let elment = document.querySelector("#vegetables")
// let parent = elment.parentElement
// parent.style.backgroundColor = 'lightgreen'

// let element = document.querySelector("#vegetables")
// let sibling = element.nextElementSibling
// sibling.style.backgroundColor = 'lightgreen'

// let element = document.querySelector("#vegetables")
// let sibling = element.previousElementSibling
// sibling.style.backgroundColor = 'lightgreen'

// let element = document.querySelector("#fruit")
// let child = element.firstElementChild
// child.style.backgroundColor = 'lightgreen'

// let element = document.querySelector("#fruit")
// let child = element.children[2]
// child.style.backgroundColor = 'lightgreen'


let element = document.querySelector("#dessert")
let children = Array.from(element.children)

children.forEach(child => child.style.backgroundColor = 'lightgreen')



