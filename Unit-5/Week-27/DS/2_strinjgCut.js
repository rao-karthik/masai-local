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
    input = input.trim();
    input = input.split('');
    
    let halfLen = Math.floor(input.length/2);
    let len = input.length;
    console.log(len)

    let half1;
    let half2;
    let midStr;

    if(len % 2 === 0){
        half1 = input.slice(0, halfLen);
        half2 = input.slice(halfLen, len);
        midStr = "";
    }
    else {
        half1 = input.slice(0, halfLen);
        half2 = input.slice(halfLen + 1, len);
        midStr = input[halfLen];
    }

    let str1 = reverseStr(half1, halfLen);
    let str2 = reverseStr(half2, halfLen);
    let str = str1 + midStr + str2;
    console.log(str);
}

if (process.env.USERNAME === "kartik") {
    runProgram(`snfdsjglnweln`);
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

function reverseStr (arr, len){
    let stack = new Stack;

    let str = "";

    for(let i = 0; i < len; i++){
        stack.push(arr[i]);
    }
    for(let i = 0; i < len; i++){
        let popped = stack.pop();
        str += popped;
    }
    return str;
}

// function reverseStr (arr, len){
//     let str = "";

//     for(let i = len-1; i >= 0; i--){
//         str += arr[i];
//     }
//     return str;
// }