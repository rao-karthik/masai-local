var arr =  ["Quick", "Brown", "Fox"]
var string = "";
for (var i = 0; i <= arr.length-1; i++){
    if (i == arr.length-1){
        string = string + arr[i]
    }
    else {
        string = string +arr[i] + ","
    }
}
console.log(string)