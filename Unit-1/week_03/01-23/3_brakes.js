function runProgram(input) {

    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    input = input[0].trim().split(" ");
    // console.log(input);
    var speed = input[0] / input[1];
    // console.log(speed);
    if (speed > 40){
        console.log("Apply Brakes");
    } else {
        console.log("Keep Going");
    }
}
if (process.env.USERNAME === "AMIT") {
    runProgram(" 1 2 3 4 5 ");
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