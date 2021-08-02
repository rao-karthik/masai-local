function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim();

    let Q = +input[2];

    let qArr = input[3].trim().split(' ').map(Number);

    for(let i = 0; i < Q; i++){
        if(arr.indexOf(qArr[i]) !== -1){
            console.log('YES');
        }
        else {
            console.log('NO');
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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