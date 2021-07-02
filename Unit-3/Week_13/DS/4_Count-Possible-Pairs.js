function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    const [n, m] = input[0].trim().split(" ");
    // console.log(n, m)

    let count = 0;
    for ( let x = 0; x <= m; x++){
        for (let y = 0; y <= n; y++){
            if((m == x + y**2) && (n == y + x**2)){
                count++
            }
        }
    }
    console.log(count)
}

if (process.env.USER === "kartik") {
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