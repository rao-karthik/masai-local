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
    print() {
        console.log(this.items.toString());
    }
}

function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    console.log(input)

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++].trim();

        let A = input[line++].trim().split(" ").map(Number);

        let right = greaterElement(A, N);
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`1
    5
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

function greaterElement (A, N) {
    let stack = [];
    stack.push[A[0]]

    let ans = [];
    ans[0] = -1;

    for(let i = 0; i < N; i++){
        while(stack.length > 0 && stack[stack.length-1] <= A[i]){
            stack.pop();
        }
        if(stack.length === 0){
            ans[i] = -1;
        }
        else {
            ans[i] = stack[stack.length-1];
        }
        stack.push(A[i]);
    }
    return ans;
}

function leftgreaterElement (A, N) {
    let stack = [];
    stack.push[A[N-1]]

    let ans = [];

    for(let i = N-1; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length-1] <= A[i]){
            stack.pop();
        }
        if(stack.length === 0){
            ans[i] = -1;
        }
        else {
            ans[i] = stack[stack.length-1];
        }
        stack.push(A[i]);
    }
    return ans.reverse();
}