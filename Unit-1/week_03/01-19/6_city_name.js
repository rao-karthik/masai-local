function runProgram(input) {
    input  = input.trim().split(/[\r\n]+/)
    for (var i = 0; i < input.length; i++){
        input[i] = input[i].trim().split(" ")
    }
    
    var city = input[0];
    // console.log(input)

    for(var i = 1; i < input.length; i++){
        // console.log(input[i])
        if(input[i][1] == city){
            console.log(input[i][0])
        }
    }
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