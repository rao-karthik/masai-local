/*
var myPromise = new Promise(function(resolve, reject){

    resolve('success') //when promise id fulfilled
    reject('Error occured') //When promise is not fulfilled
});

// .then is used to access the value whenever promise is fulfilled
myPromise.then(function(response){
    console.log(response)
})

myPromise.catch(function(response){
    console.log(response);
})
*/

/*
function singer(){
    var myPromise = new Promise(function(resolve, reject){
        var tickets = 0;

        if(tickets == 0){
            tickets = 100;
            setTimeout(function(){
                resolve(`${tickets} tickets are available`)
            }, 3000)
        }
        else {
            reject("Error, tickets are not available")
        }
    });

    myPromise.then(function(response){
        console.log(response)
    })

    myPromise.catch(function(err){
        console.log(err)
    })
}

singer()
*/

/*
function singer(){
    setTimeout(function(){
        var tickets = 100;
        console.log(`${tickets} are available`)
    }, 3000)
    .then(function(){
        console.log(tickets)
    })
}
singer()
*/

