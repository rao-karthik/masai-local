function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    let inputArr = [];
    for (var i = 0; i < input.length; i++){
        inputArr.push(input[i].trim().split(" ").map(Number));
    }
    // console.log(inputArr);

    for(let i = 0; i < inputArr.length; i++){
        var first = 0;
        var second = 0;
        for(var j = 0; j < inputArr[i].length; j++){
            first += inputArr[0][j];
            second += inputArr[1][j]
        }
    }
    // console.log(first)
    // console.log(second)

    if (first > second){
        console.log("First");
    }
    else {
        console.log("Second");
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`120 90 70
    90 80 110`);
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