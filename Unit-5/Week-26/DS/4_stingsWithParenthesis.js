class Stack {
    constructor() {
        this.items = [];
    }
  
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length == 0) return "Underflow";
        return this.items.pop();
    }
    top() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    clear() {
        return this.itsms = [];
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items);
    }
}

function runProgram(input){
    input = input.trim();
    input = input.split("");

    let len = input.length;

    let braces = input.filter(item => 
                                    item === '(' || 
                                    item === ')' || 
                                    item === '{' || 
                                    item === '}' || 
                                    item === '[' || 
                                    item === ']'
    );
    len = braces.length;

    if(len % 2 !== 0){
        console.log('unbalanced');
    }
    else {
        let stack = new Stack;
        let flag = true;

        for(let i = 0; i < len; i++){
            if(braces[i] === '(' || braces[i] === '{' || braces[i] === '['){
                stack.push(braces[i]);
            }
            else {
                if(braces[i] === ')' && stack.top() !== '('){
                    flag = false;
                    break;
                }
                else if(braces[i] === '}' && stack.top() !== '{'){
                    flag = false;
                    break;
                }
                else if(braces[i] === ']' && stack.top() !== '['){
                    flag = false;
                    break;
                }
                stack.pop();
            }
        }
        if(flag === true){
            console.log('balanced');
        }
        else {
            console.log('unbalanced');
        }
    }
        
}

if (process.env.USERNAME === "kartik") {
    runProgram(`(((((((((())))))))))`);
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