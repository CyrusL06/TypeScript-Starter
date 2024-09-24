"use strict";
// this works but how about number []
function detectTypes(value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    return value + 3;
}
// Good syntax
function provideId(id) {
    // if there is no id provide
    if (!id) {
        console.log("Please provide ID");
        // returns the method here
        return;
    }
    id.toLowerCase;
}
// From documentation saying DONT COPY IT
// beacause its faulty 
function printAll(strs) {
    if (strs) {
        // type of checks for default type
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// account is being passed on
// and it can be type User or Admin
// problem here is how to verify 100% its the role
function isAdminAccount(account) {
    // if this property exist in account
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return;
}
/////////////////////
//type predocates & Instanceof Narrowing
//////////////
// instance of
new Date();
function logValue(x) {
    // instanceof check you if this object is instance of some class
    // only use when theres potential of new keyword
    if (x instanceof Date) {
        // true
        console.log(x.toUTCString());
    }
    else {
        // when string
        console.log(x.toUpperCase());
    }
}
//👇🏼 if return is true then its FISH
function isFish(pet) {
    //pet as fish if it has method of swim  if not say its undefined
    // this is returning boolean not the type of pet
    return pet.swim !== undefined;
}
// implementinf
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
// shape it gonna come in in type of Shape👆🏼 from type
function getTrueShape(shape) {
    if (shape.property === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // whatever formula
    //return shape.side * shape.side
}
//----
//Exhaustiveness checking
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectnagle":
            return shape.length * shape.side;
        // The never type for the new added rectangle on "Shapes"
        default:
            const _defaultShape = shape;
            return _defaultShape;
    }
}
