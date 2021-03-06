function runProgram(input){
    input = input.trim().split(/[\r\n]+/).map(Number);
    // console.log(input);
    let num = input[0];

    if(num % 35 == 0){
        console.log("Masai School");
    }

    else if(num % 5 == 0){
        console.log("School");
    }

    else if(num % 7 == 0){
        console.log("Masai");
    }

    else {
        console.log("Hurray!");
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`35`);
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