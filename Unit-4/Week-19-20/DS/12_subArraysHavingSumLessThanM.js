function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0];
    let line = 1;

    for(let h = 0; h <tests; h++){
        let [n, m] = input[line++].trim().split(" ").map(Number);
        // console.log(n, m)

        let A = input[line++].trim().split(" ").map(Number);
        // console.log(A)

        let subStr = A.substring(0);
        console.log(b)
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`1
    5 5
    1 5 1 3 2`);
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