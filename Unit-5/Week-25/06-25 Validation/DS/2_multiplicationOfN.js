function runProgram(input){
    let N = input.trim();

    for(let i = 1; i <= 10; i++){
        let product = i*N;
        console.log(`${N} x ${i} = ${product}`);
    }
}

if (process.env.USERNAME === "kartik") {
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