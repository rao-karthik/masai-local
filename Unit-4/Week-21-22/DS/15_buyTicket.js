function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let queue = [];

    for(let i = 1; i <= N; i++){
        let [op, x] = input[i].trim().split(" ");

        if(op === 'E'){
            queue.push(x);
            console.log(queue.length)
        }
        else if (op === 'D'){
            if(queue.length > 0){
                console.log(queue[0], queue.length-1);
                queue.shift();
            }
            else if(queue.length === 0){
                console.log(-1 + " " + 0)
            }
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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