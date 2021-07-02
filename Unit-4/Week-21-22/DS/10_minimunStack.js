function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let ops = +input[0];
    let stack = [];

    let min = 100;
    let minArr = [];

    for(let i = 1; i <= ops; i++){
        let [op, X] = input[i].trim().split(" ");
        X = Number(X);

        if(op === 'push'){
            stack.push(X);
            min = Math.min(X, min)
            minArr.push(min)
        }
        else if(op === 'pop'){
            stack.pop();
            minArr.pop();
        }
        else if(op === 'getMin') {
            console.log(minArr[minArr.length-1]);
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`8
    push 5
    push 3
    push 1
    getMin
    pop
    getMin
    pop
    getMin`);
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