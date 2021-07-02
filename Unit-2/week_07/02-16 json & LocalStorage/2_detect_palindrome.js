function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var newWordArr = [];
    for(var i = 0; i < input.length; i++){
        var newWord = "";
        for(var j = input[i].length-1; j >=0; j--){
            newWord += input[i][j];
        }
        newWordArr.push(newWord)
    }
    // console.log(newWordArr)
    for(var i=0; i < input.length; i++){
        if(input[i] == newWordArr[i]){
            console.log("Yes");
        }
        else {
            console.log("No")
        }
    }
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