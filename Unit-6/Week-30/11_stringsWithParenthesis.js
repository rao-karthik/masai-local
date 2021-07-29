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
    input = input.trim().split(/[\r\n]+/);
    input = input[0].trim().split('');
    
    input = input.filter(brac => brac === '(' || brac === ')' || brac === '{' || brac === '}' || brac === '[' || brac === ']');
    // console.log(input)

    let len = input.length;

    let stack = new Stack();

    let flag = true;

    if(len % 2 !== 0){
        console.log('unbalanced');
    }
    else {
        for( let i = 0; i < len; i++ ){
            if(input[i] === '(' || input[i] === '{' || input[i] === '['){
                stack.push(input[i]);
            }
            else {
                if (input[i] === ')' && stack.top() !== '('){
                    flag = false;
                    break;
                }
                else if (input[i] === '}' && stack.top() !== '{'){
                    flag = false;
                    break;
                }
                else if (input[i] === ']' && stack.top() !== '['){
                    flag = false;
                    break;
                }
                stack.pop();
            }
        }
        if(flag){
            console.log('balanced');
        }
        else {
            console.log('unbalanced');
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`{(([])[])[]}`);
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