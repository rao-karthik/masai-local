function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    var arr = []
    for(let i = 1; i <input.length; i++){
        arr.push(input[i].trim().split(" "));
    }
    // console.log(arr);

    for(let i = 0; i < arr.length; i++){
        var str = ""
        for(let j = arr[i].length-1; j >= 0; j--){
            str += arr[i][j] + " "
        }
        console.log(str)
    }
}

if (process.env.USERNAME === "Kartik Rao") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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