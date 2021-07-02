function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    let [L, R] = input[0].trim().split(" ").map(Number);
    
    let str = "";
    for(let i = L; i <= R; i+=2){
        str += i + " ";
    }
    console.log(str);
}

if (process.env.USERNAME === "kartik") {
    runProgram(`4 10`);
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