"use strict";
// Before 
// 👇🏼 this one doesnt work because the value is turned to @any
// function addThree(num){
//     return num + 2
// }   
Object.defineProperty(exports, "__esModule", { value: true });
// function getUpper(val){
//     return val.toUpperCase()
// }
// getUpper(5)
// addThree(5)
// After Fixed
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
// ask for name, email, password
function signUpUser(name, email, password, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("dwaw");
signUpUser("Cyr", "@gmail.com", "wadawd", true);
//what if u only want to parse two value?
// You add default value look up👆🏼
loginUser("name", "@gmail.com");
