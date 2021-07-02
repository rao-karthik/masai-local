function runProgram(input) {
    input  = input.trim().split(/[\r\n]+/)
    // console.log(input)
    input = input[0].trim().split(".")
    console.log(input[0])
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