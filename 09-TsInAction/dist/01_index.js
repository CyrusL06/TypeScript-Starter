"use strict";
//1. Tsconfig file and directed the    "outDir": "./dist",  
//2. Youc convert ts by npm tsc -w 
// 3. automatically saves what u have in Ts is js while inspecting so have it open 
var _User_secret;
console.log("typescript is here nigga");
console.log("typescript is here amazing");
//////////////////////////////////
// Class Public & Private
////////////////////////////////
// right sytnax is knowing it before class
//---------------------------------
// THIS IS THE LONG WAY
class User {
    constructor(email, name) {
        // it needs an initializer
        // you can pass it or not its not gonna worry
        // PRIVATE  
        this.city = "";
        _User_secret.set(this, "");
        this.email = email;
        this.name = name;
    }
}
_User_secret = new WeakMap();
// creating object
//  since its a constructor you dont have to say if its email or name
// Just gotta be in order
const Cyrus = new User("dwad@gmail.com", "Cy");
// Cyrus.city 
//-----------------------------------------
//SHORCUT
//  construct(public email:"wdaw"){}
class shortUser {
    constructor(email, name, city = "Delta", secret = "") {
        this.email = email;
        this.name = name;
        this.city = city;
        this.secret = secret;
    }
    //private method
    deleteToken() {
        console.log("Token deleted");
    }
}
const Mark = new shortUser("dwad@gmail.com", "Cy");
//////////////////////////////////
// Getters, Setters,and Protected - also used to private properties to add logic
////////////////////////////////
//get is used to get any property and also can use additional logic
//setter is like useState
// protected  mean this variab;e wil be accesible that inherit class and the same class its in
class gettersNSetters {
    constructor(email, name, city = "Delta", secret = "") {
        this.email = email;
        this.name = name;
        this.city = city;
        this.secret = secret;
        // Setter accesing this
        // protected
        this._courseCount = 1;
    }
    //getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter
    //you cant make any data type on setter 
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        // gets updated
        this._courseCount = courseNum;
    }
}
const bruh = new gettersNSetters("dwad@gmail.com", "Cy");
//////////////////////////////////
// Inheretance 
////////////////////////////////
// but not private class
// 👇🏼inherate praent class
class SubUser extends gettersNSetters {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    // method that manipulate _courseCount
    changeCourseCount() {
        this._courseCount = 4;
    }
}
