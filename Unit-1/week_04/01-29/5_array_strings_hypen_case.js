var arr = ["Apple", "Windows", "UBUNTU"];

var out = arr.reduce(function(ac, el){
    if (el == arr[arr.length-1]){
        return ac + el;
    }
    else {
        return ac + el + "-";
    }
},"")
console.log(out);
