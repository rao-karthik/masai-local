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
    top1(){
        return this.items[this.items.length - 2];
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

        console.log(checkReach(arr, N));
    }
}

function checkReach (arr, N){
    let stack = new Stack();
    let index = new Stack();
    let ans = [];

    for(let i = 0; i < N; i++){
        let range = 1;
        while(stack.size() > 0 && arr[i] >= stack.top()){
            if (index.size() === 1){
                range += index.top() + 1;
            }
            else {
                range += index.top() - index.top1();
            }
            stack.pop();
            index.pop();
        }
        ans.push(range);
        stack.push(arr[i]);
        index.push(i);
    }

    return ans.join(' ');
}

if (process.env.USER === "kartik") {
    runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);
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