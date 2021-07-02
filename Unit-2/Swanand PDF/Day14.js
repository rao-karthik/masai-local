//Destructuring

//Array
//traditional
//let arr = ['Rahul', 'Bajaj', 'swanand', 24];

/*
let firstel = arr[0];
let secondel = arr[1];

//what's new?

//destructuring - unpacking array

//let [x, , , , y] = arr; //example destructuring

//empty variable name will be ignored

//console.log(x, y);

//The rest parameter (remaining) '...'


let arr = ['24', 'Bajaj', 'swanand', 24, 1, 'masai', 23];

let [ , , ...x] = arr;

console.log(x);


//Object Destructuring

let options = {
  title: 'Menu',
  width: 100,
  height: 200
};

//pass in the key name only

//Passing in custom variables

let { title: myTitle, width: myWidth } = options;

console.log(myTitle, myWidth);


//rest in object destructuring


let options = {
  title: 'Menu',
  width: 100,
  height: 200
};

let { width, title, ...anything } = options;



console.log(options);

//var arr
//var myObj


//Nested array destructuring
//patern should be same
let arr = [1, 2, [9, 10, [11, 12]]];

let [a, b, [c, d, [e, f]]] = arr;

console.log(e, f);


//Nested Object
//pattern

let options = {
  msg: 'hi',
  size: {
    width: 100,
    height: 200,
    items: [10, 20]
  }
};

let {
  size: { items }
} = options;

console.log(items);

//follow the rule for nested destrcturing - follow the pattern


//Rest - collecting
//Spread - exapnding

function findTotal(...arr) {
  var total = 0;

  arr.forEach((el) => {
    total += el;
  });

  return total;
}

var x = findTotal(10, 20, 30, 40, 50);

console.log(x);


let user = {
  name: 'John',
  surname: 'Doe'
};

//let { name, surname } = user; //destructuring for reference

let sayHello = ({ name, surname }) => {
  console.log(name, surname);
};

sayHello(user);


//crate an object
//create a function (arrow fucntion)
//when invoked should print the data inside object
//wrong approch- myPerson.name
//right way- {}



let user = {
  lastname: 'Doe',
  times: 3000
};

//let { name, surname } = user; //destructuring for reference

var myName = ({ firstname }) => {
  console.log(firstname);
};

//let firstname=user.firstname (Destrcuturing behind the hood)

myName(user);

console.log(user);

/*
var sayHello = ({firstname:'swanand' lastname, times }) => {
  console.log(`Hello, ${firstname} ${lastname}! I have seen you ${times} times before `);
};

sayHello(user);


//Event propogation

//child to parent - Event Bubbling
//parent to child - Event Capturing

function showAlert() {
  alert('You clicked: ' + this.tagName);
  event.stopPropagation();
}

var elements = document.querySelectorAll('div,p,a');

for (let el of elements) {
  el.addEventListener('click', showAlert);
}


let person = {
  name: 'x',
  lastname: 'y'
};

let { name } = person;

console.log(name);

//Array- index
//Objects - keys
*/
