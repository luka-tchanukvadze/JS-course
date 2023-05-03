// cookie = a small text file stored onoyour computer
//      used to remmber information about user 
//      saved in name=value pairs


// console.log(navigator.cookieEnabled)
// // document.cookie = 'firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/'
// document.cookie = 'firstName=Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/'
// // document.cookie = 'lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/'
// document.cookie = 'lastName=SquarePants; expires=Sun, 1 January 2000 12:00:00 UTC; path=/'

// console.log(document.cookie)
// deleteCookie('email')
// deleteCookie('firstName')
// deleteCookie('lastName')

// setCookie('firstName', 'SpongeBob', 365)
// setCookie('lastName', 'Squarepants', 365)
// console.log(getCookie('firstName'))
// console.log(getCookie('lastName'))



// setCookie('email', 'sponge@gmail.com', 365)
// console.log(document.cookie)


function setCookie(name, value, daysToLive){
    const date = new Date()
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + date.toUTCString()
    document.cookie = `${name}=${value}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null)
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split('; ')
    let result = null
    
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result
}

// deleteCookie('firstName')
// deleteCookie('lastName')



const firstText = document.querySelector('#firstText')
const lastText = document.querySelector('#lastText')
const submitBtn = document.querySelector('#submitBtn')
const cookieBtn = document.querySelector('#cookieBtn')

submitBtn.addEventListener('click', () => {
    setCookie('firstName', firstText.value, 365)
    setCookie('lastName', lastText.value, 365)
})


cookieBtn.addEventListener('click', () => {
    firstText.value = getCookie('firstName')
    lastText.value = getCookie('lastName')
})