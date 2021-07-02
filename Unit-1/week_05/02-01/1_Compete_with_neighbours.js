function runProgram(input){
    var input = input.trim().split(/[\r\n]+/);
    // console.log(input)
    var input = input[1].trim().split(" ").map(Number);
    // console.log(input);
    var count = 0;
    for(var i =0; i < input.length; i++){
        if(input[i] > input[i-1] && input[i] > input[i+1]){
            count++;
        }
    }
    console.log(count);
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