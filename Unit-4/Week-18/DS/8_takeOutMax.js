function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let [ N, K ] = input[0].trim().split(" ").map(Number);

    let numArr = input[1].trim().split(" ").map(Number);

    let currentSum = sumArr(numArr.slice(0, K))

    let res = currentSum;

    for(let i = K; i < N; i++){
        currentSum = currentSum + numArr[i] - numArr[i-K];
        res = Math.max(currentSum, res);
    }

    console.log(res);
}

if (process.env.USER === "kartik") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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

function sumArr(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    };
    return sum;
};