function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    console.log(input)

    let [ N, K ] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
}

function firstOccurance (arr, N, K){
    let i = 0;
    let j = N-1;

    let m = l + parseInt((j - i)/2);
}

if (process.env.USER === "kartik") {
    runProgram(`6 3
    2 3 3 3 6 9`);
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