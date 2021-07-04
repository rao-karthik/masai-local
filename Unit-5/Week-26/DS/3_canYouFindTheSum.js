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
        console.log(this.items.toString());
    }
}

function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);
    
    let stack1 = new Stack
    let index1 = new Stack
    let stack2 = new Stack
    let index2 = new Stack

    let x = [];
    let y = [];

    for(let i = 0; i < N; i++){
        if(stack1.isEmpty()){
            x.push(-1)
        }
        else {
            if(stack1.top() > arr[i]){
                x.push(index1.top() + 1)
            }
            else {
                while (stack1.size() > 0 && stack1.top() <= arr[i]){
                    stack1.pop();
                    index1.pop();
                }
                if(stack1.isEmpty()){
                    x.push(-1);
                }
                else {
                    x.push(index1.top() + 1);
                }
            }
        }
        stack1.push(arr[i]);
        index1.push(i);
    }

    for(let i = N-1; i >= 0; i--){
        if(stack2.isEmpty()){
            y[i] = -1;
        }
        else {
            if(stack2.top() > arr[i]){
                y[i] = index2.top() + 1;
            }
            else {
                while (stack2.size() > 0 && stack2.top() <= arr[i]){
                    stack2.pop();
                    index2.pop();
                }
                if(stack2.isEmpty()){
                    y[i] = -1;
                }
                else {
                    y[i] = index2.top() + 1;
                }
            }
        }
        stack2.push(arr[i]);
        index2.push(i);
    }

    let sum = "";
    for(let i = 0; i < N; i++){
        sum += x[i] + y[i] + " ";
    }
    console.log(sum);
}

if (process.env.USERNAME === "kartik") {
    runProgram(`5
    5 4 1 3 2`);
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