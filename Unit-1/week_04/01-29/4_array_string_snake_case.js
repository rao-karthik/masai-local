var arr = ["apple", "windows", "ubuntu"];

var out = arr.reduce(function(ac, el){
    if (el == arr[arr.length-1]){
        return ac + el;
    }
    else {
        return ac + el + "_";
    }
},"")
console.log(out);