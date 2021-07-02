//How we write functions?
//we will see new way of writing a function - Arrow function
/*
function double(val) {
  return val * 2;
} //function expression

var double2 = function (val) {
  return val * 2;
}; //function assignment

//Arrow function
//function = '=>'
//()=()

var double3 = (val) => {
  return val * 2;
}; //arrow function

//map,filter,reduce


arr.forEach((el) => {
  console.log(el);
});




var arr = [1, 2, 0, 99, 5, 66, 23];

var double = arr.map((el) => {
  return el * 2;
});

//console.log(arr, double);

//create an array
//return an array where num>4
//.filter
//arrow function

var filter = arr.filter((el) => {
  return el > 4;
});

console.log(arr, filter);


var arr = [2, 3, 4, 5, 6, 89];

var total = arr.reduce((total, el) => {
  return total + el;
});

console.log(total, arr);


//'this' keyword when we use arrow function

var name = 'school';

var myObj = {
  name: 'masai',
  city: 'pune',
  showName: function () {
    console.log(this.name); //this=myObj
  }, //normal function

  myobj2: {
    showName2: () => {
      console.log(this.name); //this=global
    } //arrow function
  }
};

myObj.myobj2.showName2();


var name = 'messi';

var myObj = {
  name: 'masai',
  city: 'pune',
  showName: function () {
    console.log(this.name); //this=myObj
  }, //normal function

  showName2: () => {
    console.log(age); //this=global
  }
};

myObj.showName2();



fetch('https://reqres.in/api/users/2')
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response.data);
  });
*/

//Closures

//()- to invoke

/*
var myFunc=function (name) {
  console.log(msg + ' ' + name);
};
*/

//myFunc('Messi');

//whenever a function runs, we have functional execution context
//For every new function, we have a new functional execution context

function greet(msg) {
  return function (name) {
    console.log(msg + ' ' + name);
  };
}

var myFunc = greet('Hello'); //functional execution context for greet function
//greet will go to stack
//greet function has access to 'msg'
//What happens when function execution is done in the stack?
//Stack will pop out greet

//myFunc('Messi');

//myFunc will go to stack
//myFunc has access to 'name'
//How did it had acces to 'msg' variable?

//closure
//Locks in variables of outer function so even though they are executed and pooped of from the stack.

// function
//return function (child)

//currying-

function Add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var A = Add(5);

var B = A(5);

var C = B(5);

console.log(Add(5)(4)(3));
