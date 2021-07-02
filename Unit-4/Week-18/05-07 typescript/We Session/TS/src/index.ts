// *1. Static type checking.
// *2. export to different js versions.
// *3. tooling, docs.
// *4. catch bugs before it reaches to prod.

let value = 123;
// value = "string" // it will throw an error bcoz we cannot assign string value to a number variable 

// * Explicit
let firtName: string;
firtName = "John"

// polyfill ?
// Ts allows to export to different versions of js
// done by: tsc filename --target ES version(ES6)
// done by: tsc filename --target ES version(ES6) -d // d is decleration

// * Boolean

let bool: boolean;
bool = true;
bool = false;

// * Number
let num: number;
num = 100;
num = 1.5;

// * Big
let bigNumber: bigint;
bigNumber = 10n;
bigNumber = BigInt(Number.MAX_SAFE_INTEGER) * BigInt(Number.MAX_SAFE_INTEGER)

console.log(Number.MAX_SAFE_INTEGER);
// 2^53

// * String
let lname : string;
lname = "school"

// * Arrays
let listOfNums : number[]; //array of numbers
let listOfStrings : string[];

listOfNums = [1, 2, 3];
listOfStrings = ["a", "b", "c"]

let booleanList : Array<boolean>;
booleanList = [ true, false ];

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

let tuple: [number, string];

tuple = [1, "abc"]

//  enums
const enum Color{
    Red, // 0
    Green,  // 1
    Blue // 2 default value
}

var green = Color.Green;

// * Others
let u: undefined;
let n: null;
let a: any; //accepts any value;

// * Objects
interface Person {
    firstName: string;
    id: number;
    phone?: number; // ? makes it optional
}

interface Coder extends Person {
    job: "software" // means job should only be software
}

let person: Person;

person = {
    id: 1,
    firstName: "Kartik",
    phone: 123
}

let coder : Coder = {
    id: 1,
    firstName: "Kartik",
    job: "software"
}

// * Functions
function Sum(a: number, b: number) : number { //outside the paranthesis is the return type
    return a + b
}

function Greet( name: string): void { // doesn't return anything
    console.log(`Greetings ${name}`);
}

//  function printName ( object: PersonProps)

interface PersonProptypes {
    firstName: string;
    lastName?: string;
}

function printName ( {firstName, lastName } : PersonProptypes) : string {
    return firtName
}

let __person : PersonProptypes = {
    firstName: "Masai",
    lastName: "School"
}

printName(__person)

// * Types

let job: "engineer" | "coder" | "programmer"
job = 'coder';

let v: number | undefined;

type SoftwareJobs = "frontEnd" | "backEnd"
type ManagerJobs = "product Manager" | "sales Manager"

type Jobs = "engineer" | "coder" | "programmer";
type NJobs = SoftwareJobs | ManagerJobs

let newJob: Jobs

// Responses 0r requests

type RequestLoading = {
    state: "loading"
}

type RequestFailed = {
    state: "failed",
    errorCode: number
}

type RequestSuccess = {
    state: "success",
    response: {
        title: string,
        status: boolean,
        id: number
    }
}

type NetworkRequests = RequestLoading | RequestSuccess | RequestFailed;

//  Responses or Requests

let req: NetworkRequests = {
    state: "failed",
    errorCode: 404
}

let requ: NetworkRequests = {
    state: "failed",
    errorCode: 404
}

// * Intersection Type

type ErrorType = {
    status: number,
    error?:{
        message: string
    }
}

type UserData = {
    userName: string,
    userId: string,
    type: "user" | "guest"
}

type AdminData = {
    userName: string,
    userId: string,
    users: UserData[]
}

type UserResponse = ErrorType & UserData;
type AdminResponse = ErrorType & AdminData;

let userResponse: UserResponse = {
    userName: "user_01",
    userId: "001",
    type: "user",
    status: 200
}

let adminResponse: AdminResponse = {
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
}