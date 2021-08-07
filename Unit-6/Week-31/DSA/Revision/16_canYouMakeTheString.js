function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let X = input[line++].trim();

        let Y = input[line++].trim().split('');

        let check = checkString(X, Y);
        console.log(check)
        
    }
}

function checkString(X, Y) {
    let stack = [];

    let xLen = X.length;
    let yLen = Y.length;

    for(let i = 0; i < xLen; i++){
        stack.push(Y[i]);
    }

    if(stack.join('') == X){
        let j = 0;
        while(j < xLen){
            stack.pop();
            j++;
        }
    }
    
    for(let i = xLen; i < yLen; i++){
        if(stack.join('') == X){
            let j = 0;
            while(j < xLen){
                stack.pop();
                j++;
            }
        }

        stack.push(Y[i]);
        
        if(stack.length >= xLen){
            let newStack = stack.slice(stack.length-xLen);

            if(newStack.join('') == X){
                let j = 0;
                while(j < xLen){
                    stack.pop();
                    j++
                }
            }
        }
    }
    if(stack.length == 0){
        return 'Yes';
    }
    else {
        return 'No';
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3
aac
aaabab
abcdef
abcdef
abcxyz
abcxyababcxyzcxyzzabcxyz`);
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