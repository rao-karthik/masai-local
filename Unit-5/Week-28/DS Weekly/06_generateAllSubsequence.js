function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    
    let n = +input[0].trim();
    let str = input[1].trim();

    let subSeq = subSequence(str, '');
};

function subSequence (str, res) {
    if(str.length === 0){
        console.log(res);
        return;
    }
    subSequence(str.substring(1), res + str[0]);
    subSequence(str.substring(1), res);
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
};