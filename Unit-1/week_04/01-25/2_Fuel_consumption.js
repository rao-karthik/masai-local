function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[0].trim().split(" ");
    // console.log(input)
    var fuel_consumption = input[1] / input[0];
    // console.log(fuel_consumption)
    if (fuel_consumption > 50){
        console.log("Enough")
    }
    else {
        console.log("Go On")
    }
}

if (process.env.USER === "rao") {
    runProgram(`500 1000`);
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