//                          👇🏼
function addTwo(num: number):number{
     return num + 2
    // return("Hello")
}   

function getUpper(val:string){
    return val.toUpperCase()
}
// ask for name, email, password
function signUpUser(name: string, email: string, password: string, isPaid: boolean)
{}

let loginUser = (name:string, email:string, 
    isPaid:boolean = false) => {
}

let myValue = addTwo(5)
getUpper("dwaw")
signUpUser("Cyr", "@gmail.com", "wadawd", true);
loginUser("name", "@gmail.com" );


// function getValue(myVal:number): boolean {
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

// Arrow Function Version
const getHello = (Type:string):string => {
    return ""
}

const heros = ["thor, spiderMan, ironMan"]
// const heros = [1, 2, 3]

// typescript is aware if its a string or number
heros.map((hero):string  => {
    return `hero is ${hero}`
})

// Means that this function is returning void
function consoleError(errmsg:string): void{
    console.log(errmsg);
    
}

// recommended in documentation 
// Returns never to the value
// handle some type of Error 
function handleleError(errmsg:string): never{
    throw new Error(errmsg);
    
}


export{}