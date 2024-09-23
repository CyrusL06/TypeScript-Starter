// Before 
// 👇🏼 this one doesnt work because the value is turned to @any
// function addThree(num){
//     return num + 2
// }   


// function getUpper(val){
//     return val.toUpperCase()
// }

// getUpper(5)
// addThree(5)

// After Fixed
function addTwo(num: number){
    // return num + 2
    return("Hello")
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
//what if u only want to parse two value?
// You add default value look up👆🏼
loginUser("name", "@gmail.com" );

export{}