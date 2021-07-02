function runProgram(input) {
    input = input.trim().split(/[\r\n]+/).map(Number);

    for(var i = 1; i < input.length; i++){
        for(var j = 1; j <= input[i]; j++){
            if (j % 15 == 0){
                console.log("FjzzBuzz");
            }
            else if (j % 3 == 0){
                console.log("Fjzz");
            }
            else if (j % 5 == 0){
                console.log("Buzz");
            }
            else {
                console.log(j);
            }
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
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});