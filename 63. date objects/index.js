// the date object is used to work with dates & times

let date = new Date();
// let date = new Date(10000000000000);
// let date = new Date(2023, 0, 1, 2, 3, 4, 5);
// let date = new Date('january 1, 2023 --:--:--');

/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

 
date = date.toLocaleString()
// document.getElementById('myLabel').innerHTML = date
// document.getElementById('myLabel').innerHTML = year
// document.getElementById('myLabel').innerHTML = dayOfMonth
// document.getElementById('myLabel').innerHTML = dayOfWeek
document.getElementById('myLabel').innerHTML = month
document.getElementById('myLabel').innerHTML = hour
document.getElementById('myLabel').innerHTML = minutes
document.getElementById('myLabel').innerHTML = seconds
*/

date.setFullYear(2024)
date.setMonth(11)
date.setDate(31)
date.setHours(23)
date.setSeconds(0)
date.setMilliseconds(1)

// date = date.toLocaleString()
// document.getElementById('myLabel').innerHTML = date
// document.getElementById('myLabel').innerHTML = formatDate(date)
document.getElementById('myLabel').innerHTML = formatTime(date)

function formatDate(date){
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return `${month}/${day}/${year}`
}

function formatTime(date){
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let amOrPm = hours >=12 ? 'pm' : 'am'

    hours = (hours % 12) || 12

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}