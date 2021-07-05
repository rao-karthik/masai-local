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
    input = input.trim().split(/[\r\n]+/)
    let n = +input[0]

    let arr = input[1].trim().split("")

    let stack = [arr[0]];

    for(let i=1; i<arr.length; i++){
        if(stack[stack.length-1] === arr[i]){
            stack.pop()
        }
        else {
            stack.push(arr[i])
        }
    }
    if(stack.length === 0){
        console.log(-1)
    }
    else {
        console.log(stack.join(""))
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`12
    abbabaadcbbc`);
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