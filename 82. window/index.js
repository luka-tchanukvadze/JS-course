// window = interface used to talk to the web browser
//      the DOM is a property of the window


// console.dir(window)
// console.log(window.innerWidth)
// console.log(window.outerHeight)

// console.log(window.scrollX)
// console.log(window.scrollY)

// console.log(window.location.href)
// window.location.href = 'https://google.com'

// console.log(window.location.hostname)
// console.log(window.location.pathname)


// const myButton = document.querySelector('#myButton')
// myButton.addEventListener('click', () => window.open('https://google.com'))
// myButton.addEventListener('click', () => window.close())

// myButton.addEventListener('click', () => window.print())

// window.alert('hello')
// window.confirm('press OK to continue')

let age = window.prompt('enter your age')
if(age < 18){
    window.alert('you must be 18+ to visit this site')
    window.close()
}