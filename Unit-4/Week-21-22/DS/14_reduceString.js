function runProgram(input){
    input = input.trim(); 
    // console.log(input);
    let len = input.length;

    let stack = [input[0]];

    for(let i = 1; i < len; i++){
        if(input[i] === stack[stack.length-1]){
            stack.pop();
        }
        else {
            stack.push(input[i]);
        }
    }

    let str = "";
    if(stack.length === 0){
        console.log('Empty String');
    }
    else {
        for(let i = 0; i < stack.length; i++){
            str += stack[i];
        }
        console.log(str);
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`aaabccddd`);
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