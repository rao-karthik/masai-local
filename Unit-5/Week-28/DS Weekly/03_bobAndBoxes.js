function runProgram(input){
    input = +input.trim();

    console.log(ways(input));
}

function ways (N){
    if(N === 0){
        return 1;
    }
    else if(N < 0){
        return 0
    }
    return ways(N-1) + ways(N-3) + ways(N-5);
}

if (process.env.USER === "kartik") {
    runProgram(`7`);
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