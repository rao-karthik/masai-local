function runProgram(input){
    input = +input.trim();

    let ways = possibleWays(input);
    console.log(ways)
}

function possibleWays (n) {
    if(n < 0){
        return 0;
    }
    else if(n === 0){
        return 1;
    }
    return possibleWays(n-1) + possibleWays(n-2) + possibleWays(n-3)
}

if (process.env.USER === "kartik") {
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