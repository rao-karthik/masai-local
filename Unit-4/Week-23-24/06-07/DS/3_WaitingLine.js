function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let N = +input[0];

    let queue = [];

    for(let i = 1; i <= N; i++){
        let [op, x] = input[i].trim().split(" ");
        // console.log(op, x)

        if (op === 'E'){
            queue.push(x);
            if(queue.length >= 0){
                console.log(queue.length);
            }
            else {
                console.log(0);
            }
        }
        if(op === 'D'){
            if(queue.length > 0){
                console.log(queue[0], queue.length-1)
            }
            else if(queue.length === 0) {
                console.log(-1, 0)
            }
            queue.shift()
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