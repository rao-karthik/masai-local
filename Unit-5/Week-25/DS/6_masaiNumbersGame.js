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
    peek() {
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
}

function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 

    let N = +input[0];

    let arr = [];
    for(let i = 1; i <= N; i++){
        arr.push(+input[i]);
    }

    let G = nextGreater(arr, N);
    console.log(G)

    let F = nextSmaller(arr, G, N);
    console.log(F)
}

if (process.env.USERNAME === "kartik") {
    runProgram(`8
    3
    7
    1
    7
    8
    4
    5
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

function nextGreater (arr, N){
    let stack = new Stack;
    stack.push(arr[N-1]);

    let ans = [];
    ans[0] = -1;

    for(let i = N-1; i >= 0; i--){
        while(!stack.isEmpty() && stack.peek() <= arr[i]){
            stack.pop();
        }
        if(stack.isEmpty()){
            ans[i] = -1
        }
        else {
            ans[i] = stack.peek();
        }
        stack.push(arr[i])
    }

    return ans;
}

function nextSmaller (arr, G, N){
    let stack = new Stack();
    stack.push(arr[N-1]);

    let ans = [];

    for(let i = N-1; i >= 0; i--){
        while(!stack.isEmpty  && stack.peek() >= G[i]){
            stack.pop();
        }
        if(stack.isEmpty()){
            ans[i] = -1
        }
        else {
            ans[i] = stack.peek();
        }
        stack.push(arr[i]);
        // console.log(stack)
    }
    
    return ans;
}