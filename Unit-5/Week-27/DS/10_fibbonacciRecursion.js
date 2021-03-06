function runProgram(input){
    input = +input.trim();

    console.log(fibbonacciNumber(input));
}

if (process.env.USERNAME === "kartik") {
    runProgram(`4`);
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

function fibbonacciNumber (n) {
    if(n <= 1){
        return n;
    }
    else {
        return fibbonacciNumber(n-1) + fibbonacciNumber(n-2);
    }
}