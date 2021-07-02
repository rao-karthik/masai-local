function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let T = +input[0];
    let line = 1;

    let stack = [];
    
    for(let i = 0; i < T; i++){
        let [X, Y] = input[line++].trim().split(' ').map(Number);
        if(X == 0){
            stack.push(Y);
        }
        else if (X == 1) {
            let s = [...stack];
            let newStack = [];
            while(s.length > 0){
                let front = s.shift();
                newStack.push(front);
            }
            console.log(newStack[newStack.length-1]);
        }
        else if (X == 2) {
            let len = stack.length-1
            stack = stack.slice(0, len);
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`6
    0 1
    0 2
    0 3
    1 
    2
    1`);
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