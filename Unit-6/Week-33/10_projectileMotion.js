function runProgram(input){
    let [a, b, c, L, R] = input.trim().split(' ').map(Number);

    let pdt = 1;

    while(L <= R){
        pdt *= a * (L**2) + b * L + c;
        L++;
    }
    console.log(pdt);
}

if (process.env.USER === "kartik") {
    runProgram(`-1 3 8 -2 2`);
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