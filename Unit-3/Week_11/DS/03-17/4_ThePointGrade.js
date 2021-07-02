function runProgram(input){
    input = input.trim().split(/[\r\n]+/).map(Number);
    // console.log(input);
    
    let marks = input[0];

    if(marks == 100){
        console.log("A");
    }

    else if (marks >= 90){
        console.log("B");
    }

    else if (marks >= 80){
        console.log("C");
    }

    else {
        console.log("F");
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`80`);
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