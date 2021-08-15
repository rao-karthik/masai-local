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

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ').map(Number);

        console.log(nextGreater(arr, N));
    }
}

function nextGreater(arr, N){
    let stack = new Stack();
    let ans = [];

    for(let i = N-1; i >= 0; i--){
        if(stack.top() > arr[i]){
            ans.push(stack.top());
        }
        else {
            while(stack.size() > 0 && stack.top() <= arr[i]){
                stack.pop();
            }
            if(stack.isEmpty()){
                ans.push(-1);
            }
            else {
                ans.push(stack.top());
            }
        }
        stack.push(arr[i]);
    }
    return (ans.reverse().join(' '));
}

if (process.env.USER === "kartik") {
    runProgram(`1
    4
    1 3 2 4`);
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