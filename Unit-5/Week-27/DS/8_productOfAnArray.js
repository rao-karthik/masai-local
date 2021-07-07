function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];
    let arr = input[1].trim().split(' ');

    console.log(arrayProduct(arr, N));
}

if (process.env.USERNAME === "kartik") {
    runProgram(`5
    3 5 2 9 4`);
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

function arrayProduct (arr, n) {
    if (n === 1){
        return arr[0];
    }
    else {
        return arr[n-1] * arrayProduct(arr.splice(0, n-1), n-1);
    }
}