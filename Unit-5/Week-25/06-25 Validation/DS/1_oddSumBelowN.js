function runProgram(input){
    let N = +input.trim();
    let sum = 0;

    for(let i = 0; i <= N; i++){
        if(i % 2 === 1){
            sum += i;
        }
    }
    console.log(sum);
}

if (process.env.USERNAME === "kartik") {
    runProgram(`7`);
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