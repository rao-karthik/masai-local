function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let str = input[1].trim();

    generateSubSequence(str, '', 0, N);
}

function generateSubSequence(str, subStr, low, high){
    if(low <= high && subStr !== ""){
        console.log(subStr);
    }

    for(let i = low; i < high; i++){
        generateSubSequence(str, subStr + str[i], i+1, high);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3
    abc`);
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