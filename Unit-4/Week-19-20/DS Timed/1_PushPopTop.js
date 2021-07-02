function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0].trim();
    let line = 1;

    let stack = [];
    
    for(let i = 0; i < tests; i++){
        let inp = input[line++].trim().split(" ");
        // console.log(inp)
        if(inp[0] === '1'){
            stack.push(inp[1]);
        }
        else if(inp[0] == '2'){
            stack.pop();
        }
        else if(inp[0] == 3){
            if(stack.length == 0){
                console.log("Empty!")
            }
            else {
                console.log(stack[stack.length-1])
            }
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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

function push(stack, n, x){
    let top = -1;
    if(stack.top === n-1){
        console.log('stackoverflow');
    }
    else {
        top++;
        stack[top] = x;
    }
}

function pop(stack, n){
    if(n === 0){
        console.log('Empty');
    }
    else {
        n--;
    }
}