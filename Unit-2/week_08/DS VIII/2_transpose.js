function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    inputArr= []
    var zero = input[0].trim().split(" ").map(Number);
    // console.log(zero)

    var row = zero[0];
    var col = zero[1];

    for (var i = 1; i < input.length; i++){
        inputstr = input[i].trim().split(" ");
        inputArr.push(inputstr)
    }
    // console.log(inputArr)

    var arr = []
    for(var i = 0; i < col; i++){
        var str = "";
        for(var j = 0; j < row; j++){
            str+= inputArr[j][i] + " ";
        }
        arr.push(str)
    }
    // console.log(arr)

    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
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