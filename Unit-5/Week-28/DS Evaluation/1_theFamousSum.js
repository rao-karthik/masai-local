function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[0].trim().split(' ').map(Number);

    let n = input[0].toString();
    let k = input[1]

    let superNum = superNumber(n, k);
    let digSum = digitSum(superNum, superNum.length-1, 0);
    digSum = digSum.toString();
    let repSum = repeatSum(digSum, digSum.length);
    console.log(repSum)
}

if (process.env.USER === "kartik") {
    runProgram(`123 3`);
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

function superNumber (n ,k) {
    if(k === 1){
        return n;
    }
    return n + superNumber(n, k-1)
}

function digitSum (n, len, sum) {
    if(len === 0){
        return sum + +n[len];
    }
    sum += Number(n[len])
    return digitSum(n, len-1, sum);
};

function repeatSum (n, len){
    let sum;
    sum = digitSum(n, len-1, 0);
    sum = sum.toString();
    let sumLen = sum.length;
    while(len !== 1){
        return repeatSum(sum, sumLen)
    }
    return sum;
}