/* function = Define code once, and use it many times. 
    To perform some code, call the function name

    let {}-shi ar ikitxeba, gvwhirdeba parametrebi-(funqciis sheqmnisas)
    argument(funqciis gamodzaxebis dros)
*/

startProgram();


function startProgram() {
    let userName = 'Bro';
    let age = 21;
    
    happyBirthay(userName, age);  
}

function happyBirthay(userName, age) {
    console.log('happy birthday to you!')
    console.log('happy birthday to you!')
    console.log('happy birthday dear', userName)
    console.log('happy birthday to you!')
    console.log('you are', age, 'years old!')
}

