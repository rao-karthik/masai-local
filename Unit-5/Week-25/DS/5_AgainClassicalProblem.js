function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let t = +input[0].trim();

    let stack = [];

    for(let i = 1; i <= t; i++){
        let braces = input[i].trim().split("");

        braces = braces.filter(item => item === '(' || item === ')' || item === '{' || item === '}' || item === '[' || item === ']');

        if(braces.length % 2 !== 0){
            console.log('not balanced');
        }
        else {
            console.log(matchBraces(braces));
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`1
    [{)){}}[})`);
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

function matchBraces(braces) {
    let stack = [];
    let flag = true;

    for(let i = 0; i < braces.length; i++){
        if(braces[i] === '(' || braces[i] === '{' || braces[i] === '[' ){
            stack.push(braces[i]);
        }
        else {
            if(braces[i] === ')' && stack[stack.length-1] !== '('){
                flag = false;
                break;
            }
            else if(braces[i] === '}' && stack[stack.length-1] !== '{'){
                flag = false;
                break;
            }
            else if(braces[i] === ']' && stack[stack.length-1] !== '['){
                flag = false;
                break;
            }
            stack.pop();
        }
    }
    if(flag){
        return 'balanced';
    }
    else {
        return 'not balanced';
    }
}