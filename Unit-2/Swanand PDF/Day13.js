//ES6
//'Write less, do more'
//Scoping
//global, local scope (function)

//let and const

//var a=1 //global scope

/*
for (let i = 0; i < 5; i++) {
  console.log('For loop running');
}



var x = 1; //will be binded to this

let y = 2; //it does not bind values to global scope (this)

console.log(this.y);


var i; 

for (i = 0; i < 5; i++) {
  console.log('For loop running');
}

//understanding if you require that variable later on in the program



console.log(a);
let a = 1;

//let variables are not hoisted
//var variables are hoisted


const x = 1; //treat this thing as constant, make sure no one reassigns it with a different value

x = 2;

const admin = 'ALEEM';

admin = 'Kapil';

console.log(x);


//const makes sure that you are not reassigning the values
const myObj = {
  name: 'ronaldo'
};

Object.freeze(myObj); //I just want to make sure that no one is going to change my object

myObj.name = 'messi';

console.log(myObj);



//Arrow function

//function- => ( fat arrow )

//1. They do not have their own this
//2. not suitable for methods
//3. they cant be hoisted
//4. you have to define them before using them

var test;
console.log(test);

test();

test = () => {
  console.log('hello');
};



//for of

var name = 'masai';

var arr = [10, 20, 30, 40];

for (x of arr) {
  console.log(x);
}

//const and let are not hoisted

console.log(x);
const x = 20;



//Array.find()

var ages = [5, 30, 35, 10, 100];

var x = ages.find((el) => {
  return el > 15;
});

console.log(x);

*/

//input - name of country
//we want to get the COvid data for that country

async function getData() {
  var country = document.getElementById('country').value;

  var covidData = document.getElementById('covid-data');

  covidData.innerText = null;

  const request = fetch('https://covid2019-api.herokuapp.com/v2/current');
  const response = await request;
  const data = await response.json();

  var singlecountry = data.data.find((el) => {
    return el.location === country;
  });

  for (key in singlecountry) {
    let para = document.createElement('P');

    para.innerText = `${key} - ${singlecountry[key]}`; //dynamic

    covidData.appendChild(para);
  }
}

//async await and fetch to get the data

//hoisting

//map filter reduce
//arrow functions

//prototypes

//let const
//forEach, for of, for in

//arrow functions
//fetch, xhr
//this
//call bind apply
//localstorage

// map, filter, reduce
