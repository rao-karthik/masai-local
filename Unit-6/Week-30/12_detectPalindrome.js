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

    let tests = +input[0].trim();
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let str = input[line++].trim().split('');
        str = str.sort();

        let check = checkPalindrome(str, N)
        
        if(check){
            console.log('Possible!');
        }
        else {
            console.log('Not Possible!');
        }
    }
}

function checkPalindrome (str, N){
    let stack = new Stack();

    for(let i = 0; i < N; i++){
        if(stack.size() > 0 && str[i] === stack.top()){
            stack.pop();
        }
        else {
            stack.push(str[i]);
        }
    }

    if (stack.size() < 2) {
        return true;
    }
    return false;
}

if (process.env.USER === "kartik") {
    runProgram(`1
    7
    giggbgb`);
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