function runProgram(input){
    let steps = input.trim().split(/[\r\n]+/); 
    console.log(input)
}

if (process.env.USER === "kartik") {
    runProgram(`3
    A
    AB
    AY`);
}
else {
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
}