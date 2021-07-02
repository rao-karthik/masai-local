function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    var inputArr = [];
    for(var i = 1; i < input.length; i++){
        var inputStr = input[i].trim().split(" ").map(Number);
        inputArr.push(inputStr);
    }
    // console.log(inputArr)
    var arr = []
    for (var i = 0; i < inputArr.length; i++){
        for (var j = 0; j < inputArr[i].length; j++){
            if(inputArr[i][j] % 3 == 0){
                arr.push(inputArr[i][j])
            }
        }
    }
    // console.log(arr)
    
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`2 3
    3 1 8
    2 6 0`);
} else {
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
}