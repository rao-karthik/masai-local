function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];

    for(let i = 1; i <= tests; i++){
        let [a, b] = input[i].trim().split(' ').map(Number);

        console.log(gcd(a, b))
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`2
    6 9
    2 25`);
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

function gcd (a, b){
    if (a === 0){
        return b;
    }
    return gcd(b % a, a);
}