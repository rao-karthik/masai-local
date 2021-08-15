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
    
    let tests = input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let n = +input[line++].trim();
        let arr = input[line++].trim().split(' ').map(Number);

        let nextG = nextGreatest(arr, n);
        let prevG = prevGreatest(arr, n);

        let ans = [];

        for(let i = 0; i < n; i++){
            let left = prevG[i];
            let right = nextG[i];

            if(left !== -1 && right !== -1){
                let leftdiff = i - left;
                let rightdiff = right - i;

                if(leftdiff < rightdiff){
                    ans.push(arr[prevG[i]]);
                }
                else if(leftdiff > rightdiff){
                    ans.push(arr[nextG[i]]);
                }
                else{
                    ans.push(arr[prevG[i]]);
                }
            }
            else if(left === -1 && right !== -1){
                ans.push(arr[nextG[i]]);
            }
            else if (right === -1 && left !== -1){
                ans.push(arr[prevG[i]]);
            }
            else{
                ans.push(-1);
            }
        }
        console.log(ans.join(" "));
    }
}

if (process.env.USER === "kartik") {
    runProgram(`1
    8
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
};

function nextSmallest (arr, n) {

    let stack = new Stack();

    let ans = [];

    for(let i = n-1; i >= 0; i--){
        if(arr[stack.top()] < arr[i]){
            ans.push(stack.top());
        }
        else{
            while(arr[stack.top()] >= arr[i] && stack.size() > 0){
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

function prevSmallest (arr, n) {
    let stack = new Stack();

    stack.push(0);

    let ans = [-1];

    for(let i = 1; i < n; i++){
        if(arr[stack.top()] < arr[i]){
            ans.push(stack.top());
        }
        else{
            while(arr[stack.top()] >= arr[i] && stack.size() > 0){
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