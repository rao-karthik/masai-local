function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0].trim();
    let arr = input[1].trim().split(' ').map(Number);

    let i = 0;
}

function findSum(N, arr, k, sum){
    if(k === N){
        return sum;
    }
    sum += arr[k];
    return findSum(N, arr, k+1, sum);
}

function unique(arr, N) {
    let i = 0;
    let j = N-1;
    let count = 0;

    while(i < j){
        
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3 
    1 2 3
    2`);
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