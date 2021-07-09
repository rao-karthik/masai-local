function runProgram(input){
    let N = +input.trim();

    console.log(log(N).toFixed(4));
}

if (process.env.USERNAME === "kartik") {
    runProgram(`3`);
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
};

function log(n) {
    if(n === 1){
        return Math.log(1);
    }
    return Math.log(n) + log(n-1)
}