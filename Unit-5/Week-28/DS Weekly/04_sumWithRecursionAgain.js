function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let n = +input[line++].trim();

        let arr = input[line++].trim().split(' ').map(Number);


        console.log(absSum(arr, n));
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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

function absSum (arr, n) {
    if (n < 2) {
        return 0;
    }
    else {
        return Math.abs(arr[n-1] - arr[n-2]) + absSum(arr, n-1);
    }
};