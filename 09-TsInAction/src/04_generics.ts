// Generics
// allows you to create really flexible code for building software
// systems and makes them more reusable 

const score: Array <number> = []
const names: Array<string> =  []

// a function that takes a value of boolean&number
function identityOne(value: boolean | number):boolean | number {
    return value
}
// this ones says can be any
function indetityTwo(value: any):any{
    return value
}

// when mentioned type ypur ready to accept log
// because with this when number is input all the 
// "Type" == to number
function identityThree<Type>(value: Type): Type {
    return value
}

identityThree("hit")

// same as one above
// but this one is the best use of generics
function identityFour<T>(value: T): T {
    return value
}

identityFour(false)

interface Bottle{
    brand: string,
    type: number,
}

identityFour<Bottle>({brand:"Mountain", type: 4})

// were taking T as an input but no ordinary, were takin array as input
function getSearchProducts<T>(productName: T[]): T {
    // do some database operations
    const myIndex = 3
    return productName[myIndex]
}

// syntax of generic and arrow function
//                             👇🏼a reminder is not a JSX syntax but for generics 
const getMoreSearchProducts = <T, >(products: T[]): T => {
    // do some database operations
    const index = 4
    return products[index]
}

////////////////////////////
// Generic Classes
//////////////////////////

interface Database{
    connection: string,
    username: string,
    password: string
}


                    // 👇🏼you take as an imput
                                //U is going to extend only to specific type, classes etc
function genericClass<T, U extends Database>(valueOne: T, valueTwo: U):object{
    return{
        valueOne,
        valueTwo
    }
}

genericClass(3, { connection: "dwaw", username: "wdadw", password: "string"}) 


// Implementation selling Course

interface Quiz{
    name: string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string
}

// were taking T as generic
// Create class that handles  
class Sellable<T>{
    // this gonna take same type and make array of that
    // that is publically shown
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}