/*
var myFetch = fetch("http://jsonplaceholder.typicode.com/todos/1"); //Promise
// console.log(myFetch)

myFetch.then(function(response){
    var myResponse = response.json() // Promise
    // console.log(myResponse)
    return myResponse
})
.then(function(response){
    console.log(response)
})
*/

var myFetch = fetch("https://reqres.in/api/users/2");

myFetch.then(function(response){
    var res = response.json();
    console.log(res)
    return res;
})
.then(function(response){
    console.log(response.data);
})