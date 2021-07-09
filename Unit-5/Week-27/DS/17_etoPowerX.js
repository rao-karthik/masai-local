function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    input = input[0].trim().split(' '); 

    let x = +input[0];
    let n = +input[1];

    console.log(etoPower(x, n).toFixed(4));
}

if (process.env.USERNAME === "kartik") {
    runProgram(`4 2`);
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

function etoPower (x, n) {
    if(n === 0){
        return 1 
    }
    return ((x ** (n))/factorial(n)) + etoPower(x, n-1)
}

function factorial (num) {
    if (num === 1){
        return 1;
    }
    return num * factorial(num-1)
}