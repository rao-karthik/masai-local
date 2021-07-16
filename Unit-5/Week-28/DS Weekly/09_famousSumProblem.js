function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    let [n, k] = input[0].trim().split(' ').map(Number);

    let sum = findSum(n.toString(), n.toString().length-1, 0);
    let totSum = sum * k;

    while(totSum.toString().length > 1){
        totSum = findSum(totSum.toString(), totSum.toString().length-1, 0)
    }
    console.log(totSum);
}

function findSum (num, len, sum){
    if(len === 0){
        return sum + +num[len];
    }
    sum += +num[len];
    return findSum(num, len-1, sum);
}

if (process.env.USER === "kartik") {
    runProgram(`148 3`);
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