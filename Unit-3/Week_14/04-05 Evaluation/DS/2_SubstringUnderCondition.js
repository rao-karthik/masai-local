function runProgram(input){
    input = input.trim(); 
    // console.log(input)

    let count = 0;
    for (let i = 0; i < input.length; i++){
        let str = '';
        for (let j = i; j < input.length; j++){
            str += input[j];
            if(str[0] === str[str.length-1]){
                count++;
            }
        }
    }
    console.log(count)
}

if (process.env.USER === "kartik") {
    runProgram(``);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`abcab`);
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