function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var integers = input[1].trim().split(" ").map(Number);
    // console.log(integers);
    var product = 1;
    for (var i = 0; i < integers.length; i++){
        product = product * integers[i];
    }
    console.log(product)
}

if (process.env.USER === "rao") {
    runProgram(`5
    3 5 2 9 4`);
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