function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    let [length, breadth] = input[0].trim().split(" ").map(Number);
    // console.log(input);

    let pertimeter = 2* (length + breadth);
    console.log(pertimeter)
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`3 6`);
} else {
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