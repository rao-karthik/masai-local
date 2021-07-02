function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    var input = input[1].trim().split(" ").map(Number);
    console.log(input);
    var least = input[0];
    var high = input[0];
    for (var i = 0; i < input.length; i++){
        if(least > input[i]){
            least = input[i];
        }
        if(high < input[i]){
            high = input[i];
        }
    }
    console.log(least);
    console.log(high);
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