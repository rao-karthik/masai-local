function runProgram(inp){
    inp = inp.trim(); 
    // console.log(inp)
    
    let stack = [];

    for(let i = 0; i < inp.length; i++){
        if( inp[i] >= 'a' && inp[i] <= 'z' || inp[i] >= 'A' && inp[i] <= 'Z' ){
            stack.push(inp[i]);
        }
        else if(inp[i] === '+' || inp[i] === '-' || inp[i] === '*' || inp[i] === '/'){
            let fig = '(' + stack[stack.length-2] + inp[i] + stack[stack.length-1] + ')';
            stack.pop();
            stack.pop();
            stack.push(fig);
        }
    }
    console.log(stack)

    
}

if (process.env.USERNAME === "kartik") {
    runProgram(`ab+c-def-*g/+hij/*+`);
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