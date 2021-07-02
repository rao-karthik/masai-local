function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    input = input[1].trim().split(" ").map(Number);
    // console.log(input);

    let i = 0;
    let count = 0;

    while (i < input.length){
        if(Math.sign(input[i]) == -1){
            count++;
        }
        i++;
    }
    console.log(count);
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`5
    -3 0 -5 9 8`);
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