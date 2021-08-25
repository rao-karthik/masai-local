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
            while(!stack.isEmpty() && stack.top() <= arr[i]){
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
    runProgram(`10
    6
    8 11 1 20 15 19
    1
    15
    9
    2 5 1 6 2 4 4 5 5
    6
    8 8 10 3 8 3
    11
    16 10 8 10 9 8 15 9 4 16 15
    2
    4 2
    11
    6 9 10 5 6 3 9 2 10 11 4
    13
    11 1 6 12 12 1 14 12 10 12 7 11 15
    12
    3 1 1 3 2 5 6 4 3 3 5 4
    14
    9 8 9 8 4 4 8 9 4 5 5 4 3 3`);
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