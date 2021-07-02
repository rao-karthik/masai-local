function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let op = +input[0];
    let line = 1;

    let stack = [];

    for(let i = 0; i < op; i++){
        let [type, cost] = input[line++].trim().split(" ").map(Number);
        if(type == 1){
            if(stack.length === 0){
                console.log('No Food');
            }
            else {
                console.log(stack[stack.length-1]);
                stack.pop();
            }
        }
        else if(type == 2){
            stack.push(cost);
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
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