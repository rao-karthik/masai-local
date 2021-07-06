function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let n = +input[line++].trim();
        let arr = input[line++].trim().split(' ').map(Number);
        console.log(arrSum(arr, n));
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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

function arrSum(arr, len) {
    if(len <= 0){
        return 0;
    }
    else {
        return arr[len-1] + arrSum(arr.splice(0, len-1), len-1);
    }
}