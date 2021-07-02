//xhr,fetch, async await

//Compelting a promise takes time

//Js Promise Object ( Early and first way of creating promise in Js )

/*
function singer() {
  //singer will take time to work on the song

  setTimeout(function () {
    var tickets = 100;

    console.log(`${tickets} are available`);
  }, 3000);

  //As fans, we want to book ticket when its available
 
}

singer();


var myPromise = new Promise(function (resolve, reject) {
  reject('Error occured'); //when promise is not fulfilled

  resolve('Successful'); //when promise is fullfilled
});
//.then is used to access the value whenever promise is fullfilled, response='success'
myPromise.then(function (response) {
  console.log(response);
});

myPromise.catch(function (response) {
  console.log(response);
});


function singer() {
  var myPromise = new Promise(function (resolve, reject) {
    var tickets = 0;

    if (tickets == 0) {
      tickets = 100;

      setTimeout(function () {
        resolve(`${tickets} tickets are availiable`);
      }, 3000);
    } else {
      reject('Error, tickets are not availiable');
    }
  });

  myPromise.then(function (response) {
    console.log(response);
  });

  myPromise.catch(function (err) {
    console.log(err);
  });
}

singer();



//step 1- fetch

var globalPromise = 'promise';

var myFetch = fetch('http://jsonplaceholder.typicode.com/todos/1'); //#P

//fetch is a promise

//how do we access a value of a promise?

myFetch.then(function (response) {
  globalPromise = response.json();


  globalPromise.then(function(response){

    
  })
});


//promise, .then()



//1. Promise.all()

var promise1 = Promise.resolve(7);
var promise2 = 42;
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('resolved');
  }, 100000);
});
var promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('resolved 2');
  }, 1000);
});

Promise.all([promise1, promise2, promise3, promise4]).then(function (response) {
  console.log(response);
});

//2. Promise.any()

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('resolved 1');
  }, 6000);
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('resolved 2');
  }, 7000);
});
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('resolved 3');
  }, 5000);
});
var promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('resolved 4');
  }, 1000);
});

Promise.any([promise1, promise2, promise3, promise4]).then(function (response) {
  console.log(response);
});
*/

//async await

//async=new Promise()
//return = resolve
// throw new Error = reject
/*
async function A() {
  return 1; //resolve
}

async function B() {
  throw new Error('Error occured'); //reject
}



console.log(B());


//async created promises

async function test(val) {
  if (val == 1) {
    return 1; //resolve
  } else {
    throw new Error('Error occured'); //reject
  }
}

var myPromise = test(100);

myPromise.then(function (response) {
  console.log(response);
});

myPromise.catch(function (err) {
  console.log(err);
});


//await keyword
*/
//Make GET request using async await

async function getData() {
  try {
    var data = fetch('http://jsonplaceholder.typicode.com/todos/cdrtr1');

    /*data.then(function (response) {
      console.log(response);
    });*/

    var newdata = await data; //stream of packets

    //newdata.then()

    var anotherdata = await newdata.json();

    console.log(anotherdata);
  } catch (e) {
    console.log(e, 'This is my error');
  }
}

getData();

//promises,async await

/*
async function getData() {
  try {
    let data = 2 * 3;

    let newdata = await somethingelse;

    let anotherdata = await newdata;

    console.log(anotherdata);
  } catch (e) {
    console.log(e);
  }
}

getData();
*/

//Promise
//1. async await
//2. new Promise

//Network requests

//1. fetch
//2. xhr

//async await + fetch ( best combo)
