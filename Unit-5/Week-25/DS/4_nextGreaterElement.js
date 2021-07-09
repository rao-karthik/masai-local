function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input);

    let T = +input[0];
    let line = 1;

    for (let i = 0; i < T; i++){
        let N = +input[line++].trim();

        let A = input[line++].trim().split(" ").map(Number);

        checkNextGreaterElem(A, N);
    }
}

if (process.env.USERNAME === "") {
    runProgram(`1
    4
    1 3 2 4`);
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

function checkNextGreaterElem (A, N) {
    let stack = [];
    stack.push(A[N-1]);

    let ans = [];
    ans[0] = -1;

    for(let i = N-1; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length-1] <= A[i]){
            stack.pop();
        }
        if(stack.length === 0){
            ans[i] = -1;
        }
        else {
            ans[i] = stack[stack.length-1];
        }
        stack.push(A[i]);
    }
    console.log(ans.join(" "));
}