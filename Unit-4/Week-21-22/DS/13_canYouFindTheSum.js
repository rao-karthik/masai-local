function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];
    // console.log(N);

    let A = input[1].trim().split(" ").map(Number);
    // console.log(A)

    let X = [];
    let Y = [];
    
    for(let i = 0; i < N; i++){
        let x = i-1;
        let y = i+1;
        if(x === -1 || y === N){
            X.push(-1);
        }
        else {
            if(A[x] > A[i]){
                X.push(x);
            }
            else {
                X.push(-1)
            }
        }
    }
    console.log(X)
}

if (process.env.USERNAME === "kartik") {
    runProgram(`5
    5 4 1 3 2`);
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