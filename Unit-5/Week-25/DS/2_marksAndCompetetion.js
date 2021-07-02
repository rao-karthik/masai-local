function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);

    let stack = [];
    stack.push(arr[0]);

    let ans = []

    for(let i = 0; i < n; i++){
        while(stack.length > 0 && stack[stack.length-1] < arr[i]){
            stack.pop();
        }
        stack.push(arr[i]);
    }
    console.log(stack.join(" "));
}

if (process.env.USERNAME === "kartik") {
    runProgram(`6
    16 17 4 3 5 2`);
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