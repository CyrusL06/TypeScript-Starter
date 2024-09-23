// naming variable
// let {variableName}: {type} = value

let greetings: string = "Hello Cyrus";

greetings.toLowerCase();
console.log(greetings); 


//number
//let userId: number = 334455.34
//OR
let userId = 334455.34
userId.toFixed() 

//boolean
let isLoggedIn: boolean = false


//any
// any is not a special type just a marker
// saying"I dont want to check it"
// USUALLY AVOID THIS
let hero: string;


function getHero(){
    return "thor"
}
// hero is @any
hero = getHero()

export {}   