function runProgram(input){
    input = +input.trim();

    let str = "";
    for(let i = 0; i < input; i++){
        str += '*';
        console.log(str)
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2`);
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