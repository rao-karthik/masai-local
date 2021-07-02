function runProgram(input){
    var input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var input = input[1].trim().split(" ").map(Number);
    // console.log(input);
    var sum = 0;
    for(var i = 0; i < input.length; i++){
        sum = sum + input[i]
        if (input[i] == 42){
            break;
        }
    }
    console.log(sum)
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