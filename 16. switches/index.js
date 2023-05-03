/* switch = statement that examines a value
    for a match agaianst many case clauses.
    More efficient that many "else if" statements */ 


// let grade = "B"
let grade = 95

switch(true){
    case grade >= 90:
        console.log("you did great");
        break;
    case grade >= 80:
        console.log("you did good");
        break
    case grade >= 70:
        console.log("you did okay");
        break;
    case grade >= 60:
        console.log("you passed...barely");
        break;
    case grade < 60:
        console.log("you failed");
        break;
    default:
        console.log(grade, 'is not a letter grade!')
}


// switch(grade){
//     case "A":
//         console.log("you did great");
//         break;
//     case "B":
//         console.log("you did good");
//         break
//     case "C":
//         console.log("you did okay");
//         break;
//     case "D":
//         console.log("you passed...barely");
//         break;
//     case "F":
//         console.log("you failed");
//         break;
//     default:
//         console.log(grade, 'is not a letter grade!')
// }





// if(grade == "A") {
//     console.log("you did great!");
// }
// else if(grade == "B"){
//     console.log("you did good");
// }
// else if(grade == "C"){
//     console.log("you did okay");
// }
// else if(grade == "D"){
//     console.log("you passed...barely");
// }
// else if(grade == "F"){
//     console.log("you failed");
// }
// else{
//     console.log(grade, "is not a letter grade");
// }