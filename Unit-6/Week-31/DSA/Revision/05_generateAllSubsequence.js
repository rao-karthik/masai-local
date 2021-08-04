function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let str = input[1].trim();

    subSequence('', str, 0, N-1);
}

function subSequence (ans, arr, low, high) {
    if(low <= high+1 && ans !== ""){
        console.log(ans);
    }
    for(let i = low; i <= high; i++){
        subSequence(ans + arr[i], arr, i+1, high);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`4
    abcd`);
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