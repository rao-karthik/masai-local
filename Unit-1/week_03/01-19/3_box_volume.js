function runProgram(input) {
    arr  = input.trim().split(/[\r\n]+/)
    arr = arr[0].trim().split(" ");
    console.log(arr[0] * arr[1] * arr[2])
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
read += input;
});
process.stdin.on("end", function () {
read = read.replace(/\n$/, "");
runProgram(read);
});
process.on("SIGINT", function () {
read = read.replace(/\n$/, "");
runProgram(read);
process.exit(0);
});