function runProgram(inp){
    inp = inp.trim().split(''); 
    
    inp = inp.filter(item => item === '(' || item === ')' || item === '{' || item === '}' || item === '[' || item === ']');
    // console.log(inp)

    let len = inp.length;

    if(len % 2 === 1){
        console.log('unbalanced');
    }
    else {
        checkBalance(inp, len);
    }
    
}

if (process.env.USERNAME === "kartik") {
    runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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

function checkBalance(input, len){
    let stack = []
    let flag = true;
    
    for(let i = 0; i < len; i++){
        if(input[i] === '(' || input[i] === '{' || input[i] === '['){
            stack.push(input[i]);
        }
        else {
            if (input[i] === ')' && stack[stack.length-1] === '('){
                flag = false;
                break;
            }
            else if (input[i] === '}' && stack[stack.length-1] === '{'){
                flag = false;
                break;
            }
            else if (input[i] === ']' && stack[stack.length-1] === '['){
                flag = false;
                break;
            }
        }
        stack.pop();
    }

    if(flag === true){
        console.log('balanced');
    }
    else {
        console.log('unbalanced');
    }
}