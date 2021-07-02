function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[0];
    // console.log(input);

    /*All SubStrings*/
    var arr = []
    for (var i = 0; i < input.length; i++){
        var str = "";
        for(var j = i; j < input.length; j++){
            str += input[j];
            arr.push(str);
        }
    }
    arr.push(arr);
    // console.log(arr);

    /*All Reverse Strings*/
    var revArr = [];
    for(var i = 0; i < arr.length; i++){
        var strr = ""
        for(var j = arr[i].length-1; j >= 0; j--){
            strr += arr[i][j];
            // console.log(strr)
        }
        revArr.push(strr);
    }
    // console.log(revArr);

    /*Palindrome Strings*/
    var palinArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == revArr[i]){
            palinArr.push(arr[i].length)
        }
    }
    // console.log(palinArr);

    var max = palinArr[0];
    for(var i = 0; i < palinArr.length; i++){
        if(max < palinArr[i]){
            max = palinArr[i];}
    }
    console.log(max);
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