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

        let leftArr = findNextGreaterLeft(arr, N);
        let rightArr = findNextGreaterRight(arr, N);

        let ans = [];

        for(let i = 0; i < N; i++){
            let gLeft = leftArr[i];
            let gRight = rightArr[i];

            if(gLeft !== -1 && gRight !== -1){
                let leftDiff = i - gLeft;
                let rightDiff = gRight - i;

                if(leftDiff > rightDiff){
                    ans.push(arr[gRight]);
                }
                else{
                    ans.push(arr[gLeft]);
                }
            }
            else if(gLeft === -1 && gRight !== -1){
                ans.push(arr[gRight]);
            }
            else if(gLeft !== -1 && gRight === -1){
                ans.push(arr[gLeft]);
            }
            else {
                ans.push(-1)
            }
        }
        console.log(ans.join(' '));
    }
}

function findNextGreaterRight(arr, N){
    let stack = new Stack();

    let ans = [];

    for(let i = N-1; i >= 0; i--){
        if(arr[stack.top()] > arr[i]){
            ans.push(stack.top());
        }
        else{
            while(arr[stack.top()] <= arr[i] && stack.size() > 0){
                stack.pop();
            }
            if(stack.isEmpty()){
                ans.push(-1);
            }
            else {
                ans.push(stack.top());
            }
        }
        stack.push(i);
    }
    return(ans.reverse());
}

function findNextGreaterLeft (arr, N) {
    let stack = new Stack();

    stack.push(0);

    let ans = [-1];

    for(let i = 1; i < N; i++){
        if(arr[stack.top()] > arr[i]){
            ans.push(stack.top());
        }
        else{
            while(arr[stack.top()] <= arr[i] && stack.size() > 0){
                stack.pop();
            }
            if(stack.isEmpty()){
                ans.push(-1);
            }
            else{
                ans.push(stack.top());
            }
        }
        stack.push(i);
    }
    return ans;
}

if (process.env.USER === "kartik") {
    runProgram(`4
    5
    3 2 1 3 1
    6
    3 1 8 9 10 2
    2
    2 9
    6
    6 7 9 5 5 4`);
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