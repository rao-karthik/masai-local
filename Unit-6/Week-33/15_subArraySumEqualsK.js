function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let nums = input[0].trim().split(' ').map(Number);
    let k = +input[1];
    
    console.log(countSubArray(nums, k));
}

function countSubArray (arr, k){
    let prevSum = new Map();
    let res = 0;
    
    let curSum = 0;

    for(let i = 0; i < arr.length; i++){
        curSum += arr[i];

        if(curSum === k){
            res++;
        }

        if (prevSum.has(curSum - k)){
           res += prevSum.get(curSum - k);
        }

        let count = prevSum.get(curSum);
        if(count == null){
            prevSum.set(curSum, 1);
        }
        else {
            prevSum.set(curSum, count+1);
        }
    }
    return res;
}

if (process.env.USER === "kartik") {
    runProgram(`1 1 1
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