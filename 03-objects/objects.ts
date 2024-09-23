
// In Js this how your used
// But objects should be written as below
const User = {
    name: "Cyrus",
    email: "@gmail.com",
    isActive: true
}

// use case of the object in typeScript👇🏼
function createUser({name: string, isPaid: boolean}){}

createUser({name:"Cyrus", isPaid: false})

// What this say
// This code says
//                     👇🏼Return Type
//                        👇🏼Definition
// function createCourse():{}{}

function createCourse():{name: string, price: number}{
    return{name: "reactJsCourse", price: 399}
}
/////////////////////
// type
/////////////////////
// Advantage is
type User = {
    name: string,
    email: string,
    isActive: boolean
}

                            //👇🏼parse the type of user from above object
                                  //return type of value "User" object  
function createTypeUser(user:User):User{
    return {name: "", email: "", isActive: true}
}

createTypeUser({name: "", email: "", isActive: true})


//////////////////////////////////////
//Optional & Read Only
///////////////////////

//  Only a type of object cannot be use as a Value
type OptionalUser = {
    // connected on MONGO DB
    // so no one should change that
    readonly _id: string
    name: string,
    email:string,
    isActive: boolean,
    // this is the optional value
    // They can ignore or input into it
    gender?: true,
    number?: number
}

// variable 
// Inputs
let myUser: OptionalUser = {
    _id:"124",
    name:"Cy",
    email:"@gmail.com",
    isActive: false

}

myUser.email = "dwadwwda"

////////////////////////////
// Mix and match of type
///////////////////
type cardNumber = {
    cardNumber:string
} 

type cardDate = {
    cardDate:string
}

//Putting them all in one + adding CVC 
type cardDetails = cardNumber & cardDate & {
    cvc:number
}

export{}