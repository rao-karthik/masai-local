var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"]

var length = function(el){
    return el.length
}

var odd = function(el){
    return el % 2 == 1;
}

var sum = function(a, b){
    return a + b;
}

var odd_sum = arr.map(length).filter(odd).reduce(sum);
console.log(odd_sum);