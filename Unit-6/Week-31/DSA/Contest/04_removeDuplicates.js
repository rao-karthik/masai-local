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
        console.log(this.items.join(' '));
    }
}

function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = [];

    for(let i = 1; i <= N; i++){
        arr.push(+input[i]);
    }

    checkDuplicates(arr, N);
}

function checkDuplicates(arr, N){
    let stack = new Stack();

    for(let i = 0; i < N; i++){
        if(!stack.isEmpty() && stack.top() === arr[i]){
            stack.pop();
        }
        else {
            stack.push(arr[i]);
        }
    }

    stack.print();
}

if (process.env.USER === "kartik") {
    runProgram(`4
    1
    1
    1
    2`);
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