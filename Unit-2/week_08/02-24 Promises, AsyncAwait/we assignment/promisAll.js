var promise1 = Promise.resolve(7);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('resolved')
    }, 3000)
})
var promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('resolved 2')
    }, 3000)
})

// Promise.all([promise1, promise2, promise3]).then(function(response){
//     console.log(response)
// })

// Promise.any([promise1, promise2, promise3]).then(function(response){
//     console.log(response)
// }) 
