function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let [ N, K ] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);

    let count = firstOccurance(arr, N, K);
    console.log(count)
}

function firstOccurance(arr, N, K){

    let l = 0;
    let r = N-1;

    let m = l + parseInt((r-l)/2);

    if
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