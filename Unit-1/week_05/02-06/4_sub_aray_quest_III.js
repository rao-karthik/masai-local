function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    /*for multiple inputs*/
    var rawArr = []
    for (var h = 2; h < input.length; h++){
        indRawArr = input[h].trim().split(" ");
        rawArr.push(indRawArr);
    }
    // console.log(rawArr)

    /*find sub arrays of all inputs*/
    var arr = [];
    for(var z = 0; z < rawArr.length; z++){
        var subArr = []
        for (var i = 0; i < rawArr[z].length; i++){
            var str = "";
            for(var j = i; j < rawArr[z].length; j++){
                str += rawArr[z][j];
                subArr.push(str);
            }
        }
        arr.push(subArr)
    }
    console.log(arr)

    /* condition for even odd */
    for(var i = 0; i < arr.length; i++){
        var count = 0;
        for(var j = 0; j <  arr[i].length; j++){
            if ((arr[i][j][0] % 2 ) == 0 && (arr[i][j][arr[i][j].length-1] % 2) == 1 ){
                count++
            }
            // console.log(arr[i][j])
        }
    }
    console.log(count)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function(input) {
    read += input;
});
process.stdin.on("end", function() {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function() {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});