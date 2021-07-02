function runProgram(input){
    var input = input.trim().split(/[\r\n]+/);
    var input = input[1].trim().split(" ").map(Number);
    console.log(input)
    var sum = 0;
    for (var i = 1; i < input.length; i=i+2){
        sum = sum + input[i];
    }
    console.log(sum);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});