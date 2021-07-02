function runProgram(input) {

    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var week = input[0];
    var item = input[1];
    item = input[1].trim().split(" ");
    // console.log(item)
    var total = week * (item[0]*5*110 + item[1]*2*120 + item[2]*2*42 + item[3]*3*53 + item[4]*2*40 + item[5]*5*32 + item[6]*2*126);
    console.log(total)
}
if (process.env.USER === "rao") {
    runProgram(`4
    0 1 1 1 0 0 1`);
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