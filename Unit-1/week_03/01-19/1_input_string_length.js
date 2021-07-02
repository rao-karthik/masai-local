function runProgram(input) {
  input  = input.trim().split(/[\r\n]+/)
  console.log(input)
  console.log(input[0].length)
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