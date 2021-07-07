function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    let num = arr[N-1];

    console.log(smallestNum(arr, N));
    console.log(largestNum(arr, N));
}

if (process.env.USERNAME === "kartik") {
    runProgram(`4
    -2 0 8 4`);
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

function smallestNum (arr, N,) {
    if(N === 1){
        return arr[0] 
    }
    return Math.min(arr[N-1], smallestNum(arr, N-1));
};

function largestNum (arr, N) {
    if(N === 1){
        return arr[0] 
    }
    return Math.max(arr[N-1], largestNum(arr, N-1));
};