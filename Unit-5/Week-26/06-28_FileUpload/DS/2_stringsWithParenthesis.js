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
    let arr  = input.trim().split("");
    let stack = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] == "(" || arr[i] == "{" || arr[i] == "["){
            stack.push(arr[i])
        }
        else if(arr[i] == ")" || arr[i]== "}" || arr[i] == "]"){
            if(arr[i] == ")" && stack[stack.length-1] == "("){
                stack.pop()
            }
            else if(arr[i] == "}" && stack[stack.length-1] == "{"){
                stack.pop()
            }
            else if(arr[i] == "]" && stack[stack.length-1] == "["){
                stack.pop()
            }
            else{
                break;
            }
        }
    }
    if(stack.length > 0 || (arr[0] == "}") || (arr[0] == ")") || (arr[0] == "]")){
        console.log("unbalanced")
    }
    else {
        console.log("balanced")
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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

function checkBraces(braces, N) {
    let stack = new Stack;
    let flag = true;

    for(let i = 0; i < N; i++){
        if(braces[i] === '(' || braces[i] === '{' || braces[i] === '[' ){
            stack.push(braces[i]);
        }
        else if(braces[i] == ")" || braces[i]== "}" || braces[i] == "]"){
            if(braces[i] == ")" && stack.peek() == "("){
                stack.pop()
            }
            else if(braces[i] == "}" && stack.peek() == "{"){
                stack.pop()
            }
            else if(braces[i] == "]" && stack.peek() == "["){
                stack.pop()
            }
            else{
                break;
            }
        }
    }

    if(stack.length > 0 || (braces[0] == "}") || (braces[0] == ")") || (braces[0] == "]")){
        console.log("unbalanced")
    }
    else {
        console.log("balanced")
    }
}