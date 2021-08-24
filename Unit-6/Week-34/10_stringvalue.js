function runProgram(input){
    let str = input.trim();
    
    let value = 0;
    let a = 'a';

    for(let i = 0; i < str.length; i++){
        value += str.charCodeAt(i) - a.charCodeAt(0) + 1;
    }

    console.log(value);
}

if (process.env.USER === "kartik") {
    runProgram(`aba`);
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