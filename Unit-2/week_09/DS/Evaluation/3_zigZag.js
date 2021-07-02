function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    var [row, col] = input[0].trim().split(" ").map(Number);
    // console.log(row, col);

    var arr = [];
    for(var i = 1; i <= row; i++){
        var items = input[i].trim().split(" ");
        arr.push(items)
    }
    // console.log(arr)

    var str = "";
    for(var i = 0; i < row; i++){
        if (i % 2 == 0) {
            for(var j = col-1; j >= 0; j--){
                str += arr[i][j] + " ";
            }
        }
        else if(i % 2 != 0){
            for(var j = 0; j < col; j++){
                str += arr[i][j] + " ";
            }
        }
    }
    console.log(str)
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`);
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