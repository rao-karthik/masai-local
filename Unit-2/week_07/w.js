// setInterval(function () {
//     setTimeout(function () {
//       return("Hello World");
//     }, 3000);
//   }, 3000);


function isPrime(input){
    var flag  = true;
    for(var i = 2; i < input; i++){
        if (input == 0 || input == 1){
            return false;
        }   
    }
    if (input == 0 || input == 1){
        return ("Neither Prime Nor Co-Prime")
    }
    if (flag == false){
        return("Not Prime")
    }
    if (flag == true){
        return("Prime")
    }
}
console.log(isPrime(1))

var input = [1,, 2, 3, 5, 7, 12]
for(var i = 0; i < input.length; i++){
    for(var j = 0; j < input.length; j++){
        if (j > i){
            if(isPrime(j-i) == "Prime"){
                console.log(j, i, j-i)
            }
        }
    }
}