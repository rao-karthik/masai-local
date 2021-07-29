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

    let i = 0;

    while(input[i] != 0){
        let N = +input[i];

        let nums = input[i+1].trim().split(' ').map(Number);

        let ans = orderTrucks(N, nums);
        nums = nums.sort((a, b)=> a -b);
        console.log(nums)

        let flag = true;

        for(let i = 0; i < N; i++){
            if(ans[i] !== nums[i]){
                flag = false;
                break;
            }
        }

        if(flag){
            console.log('yes');
        }
        else{
            console.log('no');
        }
        i+= 2;
    }
}

function orderTrucks(N, nums){
    let stack = new Stack();
    let ans = [];

    for(let i = 0; i < N; i++){
        if(stack.isEmpty()){
            stack.push(nums[i]);
        }
        else {
            if(nums[i] > nums[i+1] && stack.top() > nums[i]){
                stack.push(nums[i]);
            }
            else if(nums[i] > nums[i+1] && stack.top() < nums[i]){
                while(stack.top() < nums[i]){
                    ans.push(stack.top());
                    stack.pop();
                }
                stack.push(nums[i]);
            }
            else if (stack.top() < nums[i]){
                while(stack.top() < nums[i]){
                    ans.push(stack.top());
                    stack.pop();
                }
                stack.push(nums[i]);
            }
            else {
                ans.push(nums[i]);
            }
        }
        if(i === N-1){
            while(!stack.isEmpty()){
                ans.push(stack.top());
                stack.pop();
            }
        }
    }

    return ans;
}

if (process.env.USER === "kartik") {
    runProgram(`10 
    1 2 10 5 4 3 7 6 8 9 20
    0`);
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