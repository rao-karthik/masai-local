function runProgram(input){
    input = input.trim().split(/[\r\n]+/).map(Number);
    // console.log(input);
    if (input[0] == 100){
        console.log("A");
    }
    else if (input[0] >= 90){
        console.log("B");
    }
    else if (input[0] >= 80){
        console.log("C");
    }
    else {
        console.log("F");
    }
}

if (process.env.USER === "rao") {
    runProgram(`80`);
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