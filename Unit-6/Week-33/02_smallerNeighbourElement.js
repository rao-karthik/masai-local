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

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);
    
    let smaller = smallerNeighbour(arr, N);
    console.log(smaller)
}

function smallerNeighbour(arr,N){
    let stack = new Stack();
    let ans = [];

    for(let i = 0; i < N; i++){
        while(!stack.isEmpty() && stack.top() >= arr[i]){
            stack.pop();
        }
        if(stack.isEmpty()){
            ans.push(-1);
        }
        else {
            ans.push(stack.top());
        }
        stack.push(arr[i]);
    }
    return ans.join(' ');
}

if (process.env.USER === "kartik") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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