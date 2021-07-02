function isdiff(a, b){
    var diff = a - b 
    if (a < b){ 
        diff = b - a;
    } else if (a > b){
        diff = a - b;
    }
        return diff
}

console.log(isdiff(-24, -56))