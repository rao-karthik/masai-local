function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    console.log(input)

    let tests = +input[0].trim();
    console.log(tests)

    let arr = [];
    for (let i = 0; i < input.length; i++){
        arr.push(input[i].trim().split(" "))
    }
    console.log(arr)

    
    
}

if (process.env.USER === "kartik") {
    runProgram(`1
    3 3 
    1 2 3
    4 5 6
    7 8 9`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`1
    3 3 
    1 2 3
    4 5 6
    7 8 9`);
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