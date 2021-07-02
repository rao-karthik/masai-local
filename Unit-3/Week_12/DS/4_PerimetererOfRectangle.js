function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    let [l, b] = input[0].trim().split(" ").map(Number);

    let perimeter = 2 * (l + b);
    console.log(perimeter);
}

if (process.env.USER === "kartik") {
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