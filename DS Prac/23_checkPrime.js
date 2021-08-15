var input = 2;

// Count Method to Check Prime Numbers
function isPrime(input){
    var count = 0;
    for(var i = 1; i <= input; i++){
        if(input % i == 0){
            count++
        }
    }
    // console.log(count)
    if(input == 1 || input == 0){
        return ("Neither Prime Nor Co-Prime")
    }
    else if(count == 2){
        return("Prime")
    }
    else{
        return("Not Prime")
    }
}

// Root method to check Prime Numbers
function isprime(num){
    if(num === 0 || num === 1){
        return false;
    }

    var limit = Math.ceil(Math.pow(num, 1/2));
    if(num !== 2){
        for (var i = 2; i <= limit; i++){
            if(num % i == 0){
                return false
            }
        }
    }
    return true;
}

console.log(isprime(input))