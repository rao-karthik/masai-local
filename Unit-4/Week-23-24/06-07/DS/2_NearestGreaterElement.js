function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++].trim().split(" ");

        let arr = input[line++].trim().split(" ").map(Number);

        let stack = [];
        stack.push(arr[N-1]);
        let ansArr = [];
        ansArr[0] = -1;

        for(let j = 0; j <= N-1; j++){
            while (stack.length > 0 && stack[stack.length-1] <= arr[j]){
                stack.pop();
            }
            if(stack.length === 0){
                ansArr[j] = -1;
            }
            else {
                ansArr[j] = stack[stack.length-1];
            }
            stack.push(arr[j]);
        }
        console.log(ansArr.join(" "));
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`1
    5
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