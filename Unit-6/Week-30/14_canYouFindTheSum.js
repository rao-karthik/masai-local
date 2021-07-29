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

    let A  =input[1].trim().split(' ').map(Number);

    let left = nextGreaterLeft(A, N);
    let right = nextGreaterRight(A, N);
    
    let sum = [];
    for(let i = 0; i < N; i++){
        sum.push(left[i] + right[i]);
    }

    console.log(sum.join(' '));
}

function nextGreaterLeft (arr, N){
    let stack = new Stack();
    let index = new Stack();
    let ans = []

    for(let i = 0; i < N; i++){
        if(stack.isEmpty()){
            ans.push(-1);
        }
        else {
            if(stack.top() > arr[i]){
                ans.push(index.top() + 1);
            }
            else {
                while(!stack.isEmpty() && stack.top() <= arr[i]){
                    stack.pop();
                    index.pop();
                }
                if(stack.isEmpty()){
                    ans.push(-1);
                }
                else {
                    ans.push(index.top() + 1);
                }
            }
        }
        stack.push(arr[i]);
        index.push(i);
    }

    return ans;
}

function nextGreaterRight (arr, N){
    let stack = new Stack();
    let index = new Stack();
    let ans = []

    for(let i = N - 1; i >= 0; i--){
        if(stack.isEmpty()){
            ans.push(-1);
        }
        else {
            if(stack.top() > arr[i]){
                ans.push(index.top() + 1);
            }
            else {
                while(!stack.isEmpty() && stack.top() <= arr[i]){
                    stack.pop();
                    index.pop();
                }
                if(stack.isEmpty()){
                    ans.push(-1);
                }
                else {
                    ans.push(index.top() + 1);
                }
            }
        }
        stack.push(arr[i]);
        index.push(i);
    }

    return ans.reverse();
}

if (process.env.USER === "kartik") {
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