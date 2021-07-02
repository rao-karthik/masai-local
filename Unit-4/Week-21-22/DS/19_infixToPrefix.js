function runProgram(input){
    let inp = input.trim().split(''); 
    // console.log(input);

    inp = inp.reverse();

    let len = inp.length;
    let output = "";
    let stack = [];

    for (let i = 0; i < len; i++){
        if((inp[i] >= 'a' && input[i] <= 'z') || (inp[i] >= 'A' && inp[i] <= 'Z') || (inp[i] >= 0 && inp[i] <= 9)){
            output += inp[i];
        }
        else if(inp[i] === ')'){
            stack.push(')');
        }
        else if(inp[i] === '('){
            while(stack[stack.length-1] !== ")"){
                output += stack[stack.length-1]
                stack.pop();
            }
            stack.pop();
        }
        else {
            let preced = precedence(inp[i]);
            while(stack.length > 0 && preced <= precedence(stack[stack.length-1])){
                output += stack[stack.length-1];
                stack.pop();
            }
            stack.push(inp[i]);
        }
    }
    while(stack.length > 0){
        output += stack[stack.length-1];
        stack.pop();
    }
    console.log(output.split('').reverse().join(''));
}

if (process.env.USERNAME === "kartik") {
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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

function precedence(char){
    if(char === '^'){
        return 3;
    }
    else if(char === '*' || char === '/'){
        return 2;
    }
    else if(char === '+' || char === '-'){
        return 1;
    }
}