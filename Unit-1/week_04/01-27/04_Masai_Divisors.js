function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    input = input[0].trim().split(" ").map(Number);
    // console.log(input);
    var left = input[0];
    var right = input[1];
    var k = input[2];
    var count = 0;
    for ( var i = left; i <= right; i++){
        // console.log(i);
        if (i % k == 0){
            count++
        }
    }
    console.log(count)
}

if (process.env.USER === "rao") {
    runProgram(`1 10 1`);
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