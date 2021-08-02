function runProgram(input){
    input = +input.trim();

    console.log(findFactorial(input));
}

function findFactorial (num) {
    if(num <= 1){
        return num;
    }
    return num * findFactorial(num - 1);
}

if (process.env.USER === "kartik") {
    runProgram(`5`);
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