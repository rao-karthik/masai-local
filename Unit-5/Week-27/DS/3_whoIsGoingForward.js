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

    const [ n, k ] = input[0].trim().split(" ").map(Number);
    const arr = input[1].trim().split(' ').map(Number);

    let stack = new Stack;

    for(let i = 0; i < k; i++){
        if(arr[i] !== 0){
            stack.push(arr[i]);
        }
        if(i === k-1){
            let j = k;
            while(arr[j] === stack.top()){
                stack.push(arr[j]);
                j++;
            }
        }
    }
    
    console.log(stack.size());
}

if (process.env.USERNAME === "kartik") {
    runProgram(`8 5
    10 9 8 7 7 7 5 5`);
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