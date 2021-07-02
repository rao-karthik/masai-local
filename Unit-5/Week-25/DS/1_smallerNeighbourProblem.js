function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let N = +input[0];
    // console.log(N)

    let A = input[1].trim().split(" ").map(Number);

    let stack = [];
    stack.push(A[0]);
    let G = [];
    G[0] = -1;

    for(let i = 0; i < N; i++){
        while(stack.length > 0 && stack[stack.length-1] >= A[i]){
            stack.pop();
        }
        if(stack.length === 0){
            G[i] = -1;
        }
        else {
            G[i] = stack[stack.length-1];
        }
        stack.push(A[i]);
    }
    console.log(G.join(' '));
}

if (process.env.USERNAME === "kartik") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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