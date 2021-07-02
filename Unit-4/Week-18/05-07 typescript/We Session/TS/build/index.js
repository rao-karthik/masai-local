"use strict";
// *1. Static type checking.
// *2. export to different js versions.
// *3. tooling, docs.
// *4. catch bugs before it reaches to prod.
let value = 123;
// value = "string" // it will throw an error bcoz we cannot assign string value to a number variable 
// * Explicit
let firtName;
firtName = "John";
// polyfill ?
// Ts allows to export to different versions of js
// done by: tsc filename --target ES version(ES6)
// done by: tsc filename --target ES version(ES6) -d // d is decleration
// * Boolean
let bool;
bool = true;
bool = false;
// * Number
let num;
num = 100;
num = 1.5;
// * Big
let bigNumber;
bigNumber = 10n;
bigNumber = BigInt(Number.MAX_SAFE_INTEGER) * BigInt(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
// 2^53
// * String
let lname;
lname = "school";
// * Arrays
let listOfNums; //array of numbers
let listOfStrings;
listOfNums = [1, 2, 3];
listOfStrings = ["a", "b", "c"];
let booleanList;
booleanList = [true, false];
// for react
/*
class HandleObject <T> {
    constructor (value: T){

    }
}

var x : HandleObject <number>
*/
// * Tuples
// An array that contains two value of two types.
let tuple;
tuple = [1, "abc"];
var green = 1 /* Green */;
// * Others
let u;
let n;
let a; //accepts any value;
let person;
person = {
    id: 1,
    firstName: "Kartik",
    phone: 123
};
let coder = {
    id: 1,
    firstName: "Kartik",
    job: "software"
};
// * Functions
function Sum(a, b) {
    return a + b;
}
function Greet(name) {
    console.log(`Greetings ${name}`);
}
function printName({ firstName, lastName }) {
    return firtName;
}
let __person = {
    firstName: "Masai",
    lastName: "School"
};
printName(__person);
// * Types
let job;
job = 'coder';
let v;
let newJob;
//  Responses or Requests
let req = {
    state: "failed",
    errorCode: 404
};
let requ = {
    state: "failed",
    errorCode: 404
};
let userResponse = {
    userName: "user_01",
    userId: "001",
    type: "user",
    status: 200
};
let adminResponse = {
    userName: "user_01",
    userId: "001",
    status: 200,
    users: [
        {
            userName: "user_01",
            userId: "001",
            type: "user"
        }
    ]
};
