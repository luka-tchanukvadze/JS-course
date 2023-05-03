/* nested functions = functions inside other functions.
        outer function have access to inner function
        inner functions are "hidden" from outside 
        used is closures    
*/

let userName = 'Bro';
let userInbox = 0;

// displayUserName()
login();


function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`)
    }
    
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`)
    }
}



// function login(){
//     displayUserName();
//     displayUserInbox();
// }


// function displayUserName(){
//     console.log(`Welcome ${userName}`)
// }

// function displayUserInbox(){
//     console.log(`You have ${userInbox} new messages`)
// }