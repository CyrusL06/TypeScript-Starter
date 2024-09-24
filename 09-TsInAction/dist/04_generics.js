"use strict";
// Generics
// allows you to create really flexible code for building software
// systems and makes them more reusable 
const score = [];
const names = [];
// a function that takes a value of boolean&number
function identityOne(value) {
    return value;
}
// this ones says can be any
function indetityTwo(value) {
    return value;
}
// when mentioned type ypur ready to accept log
// because with this when number is input all the 
// "Type" == to number
function identityThree(value) {
    return value;
}
identityThree("hit");
// same as one above
// but this one is the best use of generics
function identityFour(value) {
    return value;
}
identityFour(false);
identityFour({ brand: "Mountain", type: 4 });
// were taking T as an input but no ordinary, were takin array as input
function getSearchProducts(productName) {
    // do some database operations
    const myIndex = 3;
    return productName[myIndex];
}
// syntax of generic and arrow function
//                             👇🏼a reminder is not a JSX syntax but for generics 
const getMoreSearchProducts = (products) => {
    // do some database operations
    const index = 4;
    return products[index];
};
// 👇🏼you take as an imput
//U is going to extend only to specific type, classes etc
function genericClass(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo
    };
}
genericClass(3, { connection: "dwaw", username: "wdadw", password: "string" });
// were taking T as generic
// Create class that handles  
class Sellable {
    constructor() {
        // this gonna take same type and make array of that
        // that is publically shown
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
