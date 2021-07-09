function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    
    let tests = +input[0];
}

if (process.env.USERNAME === "kartik") {
    runProgram(`3
    1
    2
    4`);
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

function countSame (n, prev) {
    if(prev === 1){
        return 1
    }
    let obj = {};

    countSame(n, prev + 1)
}



