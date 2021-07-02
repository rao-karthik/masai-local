var arr = ["apple", "mango", "rst" ];
var count = 0;
for(var j = 0; j < arr.length; j++){
    for(var k = 0; k < arr[j].length; k++){
        if (arr[j][k] == "a" || arr[j][k] == "e" || arr[j][k] == "i" || arr[j][k] == "o" || arr[j][k] == "u"){
            count++;
            break;
        }
    }
}

// console.log(count)
if(count == 3){
    console.log("true");
}
else {
    console.log("false");
}