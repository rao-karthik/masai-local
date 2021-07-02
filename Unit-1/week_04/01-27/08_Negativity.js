function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var integers = input[1].trim().split(" ").map(Number);
    // console.log(integers);
    var count = 0;
    for (var i = 0; i < integers.length; i++){
        if (integers[i] < 0){
            count++;
        }
        // console.log(count);
    }
    console.log(count);
}

if (process.env.USER === "rao") {
    runProgram(`5
-3 0 -5 9 8`);
} 
else {
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