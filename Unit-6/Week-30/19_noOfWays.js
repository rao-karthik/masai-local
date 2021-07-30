function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++].trim();

        console.log(numberOfWays(N, 0));
    }
}

function numberOfWays (n, k) {
    if(k === n){
        return 1;
    }
    if(n < k){
        return 0;
    }
    return numberOfWays(n, k+4) + numberOfWays(n, k+8);
}

if (process.env.USER === "kartik") {
    runProgram(`1
    12`);
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