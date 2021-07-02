function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[0].trim().split(" ");
    // console.log(input);
    var revInput = ""
    for(var i = input.length-1; i >= 0; i--){
        revInput += input[i] + " "
    }
    console.log(revInput);
}

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