function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    console.log(input)

    let tests = 0;
    let line = 0;

    for(let i = 0; i < DataTransferItemList; i++){
        let line = input[line++].trim().split(' ').map(Number);

        let arr = input.trim().split(' ').map(Number);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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