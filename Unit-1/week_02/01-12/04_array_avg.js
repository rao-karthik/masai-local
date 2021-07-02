var ara = [];
function issum(input){
    var sum = 0;
    for (var i = 0; i < input.length; i++){
        sum = sum + input[i];
    }
    return sum;
}

// console.log(issum(ara));

var avg = 0;
avg = issum(ara)/ara.length;
console.log("(" + ara + ")" + " Average = " + avg)
