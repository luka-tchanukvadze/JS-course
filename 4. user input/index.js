// easy way

// let username = window.prompt("what's your name?");
// console.log(username);


//hard way   html-shi label

let username;

document.getElementById("myButton").onclick = function() {

    username = document.getElementById("myText").value;
    console.log(username)
    document.getElementById("myLabel").innerHTML = 'hello ' + username
}