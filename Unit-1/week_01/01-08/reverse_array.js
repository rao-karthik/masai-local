var arr = ["A", "E", "I", "O", "U"];
for (var i = arr.length-1; i >= 0 ; i--){
    arr[i] = arr[i].toString();
    for (var j = arr[i].length-1; j >= 0; j--){
        console.log(arr[i][j])
    
    }
}

