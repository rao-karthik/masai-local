function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    console.log(input);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ');

        
    }
}

function checkDegree () {

}

if (process.env.USER === "kartik") {
    runProgram(`1
    13
    1 3 3 2 2 3 6 6 5 5 6 6 3`);
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