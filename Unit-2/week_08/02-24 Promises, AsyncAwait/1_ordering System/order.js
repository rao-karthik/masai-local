var btn = document.querySelector("button");
btn.addEventListener("click", orderFood);

var order = document.getElementById("order")

function orderFood(){
    var myPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(order.style.display = "block")
        }, 5000)
    })
    myPromise.then(function(response){
        console.log(response)
    })

    // myPromise.catch(function(err){
    //     console.log(err)
    // })
}