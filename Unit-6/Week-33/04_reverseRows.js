function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    for(let i = 1; i <= N; i++){
        console.log(input[i].trim().split(' ').reverse().join(' '));
    }

}

if (process.env.USER === "kartik") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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