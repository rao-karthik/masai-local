function runProgram(input){
    input = input.trim().split(/[\r\n]+/).map(Number);
    // console.log(input);

    var A = input[0];
    var B = input[1];
    var C = input[2];
    var N = input[3];

    if(A > N){
        console.log("Person A");
    }
    else if (B > N) {
        console.log("Person B");
    }
    else if (C > N) {
        console.log("Person C");
    }
    else {
        console.log("Not found")
    }
}
if (process.env.USER === "rao") {
    runProgram(`4000
    3000
    2000
    5000`);
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