
var karbtn = document.getElementById("kartik");
karbtn.addEventListener("click", birthdayKar);

var susbtn = document.getElementById("sushant");
susbtn.addEventListener("click", birthdaySus);

var parbtn = document.getElementById("parveen");
parbtn.addEventListener("click", birthdayPar);

var varbtn = document.getElementById("varun");
varbtn.addEventListener("click", birthdayVar);


function birthdayKar(){
    var h3 = document.querySelector("h3")
    var div = document.querySelector("div")
    var myPromise = new Promise(function(resolve, reject){
        var age = 22;
        var time = (age-20)*1000
        setTimeout(function(){
            resolve()
        }, time)
    })
    myPromise.then(function(response){
        h3.innerHTML = "CONGRATULATIONS";
        div.innerHTML = "<img src='https://www.mynameart.com/pics/wishing-you-beautiful-day-happy-birthday-quote-greeting-card.jpg' />"
    })
}

function birthdaySus(){
    var h3 = document.querySelector("h3")
    var div = document.querySelector("div")
    var myPromise = new Promise(function(resolve, reject){
        var age = 27;
        var time = (age-20)*1000
        setTimeout(function(){
            resolve()
        }, time)
    })
    myPromise.then(function(response){
        h3.innerHTML = "CONGRATULATIONS";
        div.innerHTML = "<img src='https://www.happybirthdaymsg.com/wp-content/uploads/2016/01/happy-birthday-image-10.jpg' />"
    })
}

function birthdayPar(){
    var h3 = document.querySelector("h3")
    var div = document.querySelector("div")
    var myPromise = new Promise(function(resolve, reject){
        var age = 24;
        var time = (age-20)*1000
        setTimeout(function(){
            resolve()
        }, time)
    })
    myPromise.then(function(response){
        h3.innerHTML = "CONGRATULATIONS";
        div.innerHTML = "<img src='https://www.caminhotel.com/wp-content/uploads/2016/12/Happy-Birthday-1-1-835x700.jpg' />"
    })
}
function birthdayVar(){
    var h3 = document.querySelector("h3")
    var div = document.querySelector("div")
    var myPromise = new Promise(function(resolve, reject){
        var age = 30;
        var time = (age-20)*1000
        setTimeout(function(){
            resolve()
        }, time)
    })
    myPromise.then(function(response){
        h3.innerHTML = "CONGRATULATIONS";
        div.innerHTML = "<img src='http://www.sru.edu//images/news/2019/June/062719a-Inline.jpg' />"
    })
}