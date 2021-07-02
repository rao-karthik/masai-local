function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let str = "";
    for ( let i = 0; i < input[0].length; i+=2){
        count = i+1
        for(let j = 0; j < input[0][count]; j++){
            str += input[0][i]
        }
    }
    console.log(str)
}

if (process.env.USER === "kartik") {
    runProgram(`a3b2`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`a3b2`);
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