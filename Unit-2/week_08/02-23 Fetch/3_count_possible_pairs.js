function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[0].trim().split(" ").map(Number);
    // console.log(input);
    var m = input[1];
    // console.log(m)
    var n = input[0];
    // console.log(n)
    var count = 0;
    for(var x = 0; x <= m; x++){
        for(y = 0; y <= n; y++){
            if((m == x + y**2) && (n == y + x**2)){
                count++;
            }
        }
    }
    console.log(count)
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`9 3`);
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