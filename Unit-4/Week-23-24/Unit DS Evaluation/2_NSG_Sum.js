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
}

function runProgram(input) {
    var data = input.split(/[\r\n]+/);
    var tc=+data[0]
    var line = 0
    for ( i = 0; i < tc; i++) {
        var len = +data[++line]
        var arr = data[++line].trim().split(" ").map(Number)
        nextSmallerOfGreater(arr)
    }
  
  }
  
  if (process.env.USERNAME === "kartik") {
    runProgram(`1
    6
    5 1 6 2 5 1`);
  } else {
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
  function nextGreatest(arr) {
    var n = arr.length;
    var answer = new Array(n);
    for (var i = 0; i < n; i++){
        answer[i] = -1;
    }
    var stack = new Stack;
    stack.push(0);
    for (var i = 1; i < n; i++){
        while (!stack.isEmpty() && arr[stack.top()] < arr[i]) {
            answer[stack.top()] = i;
            stack.pop();
        }
        stack.push(i)
    }

    return answer
}


function nextSmallerRight(arr) {
    var n = arr.length;
    var answer = new Array(n);
    for (var i = 0; i < n; i++){
        answer[i] = -1;
    }
    var stack = new Stack;
    stack.push(0);
    for (var i = 1; i < n; i++){
        while (!stack.isEmpty() && arr[stack.top()] > arr[i]) {
            answer[stack.top()] = i;
            stack.pop();
        }
        stack.push(i)
    }

    return answer
}


function nextSmallerOfGreater(arr){
    greaterArray = nextGreatest(arr)
    nextSmaller = nextSmallerRight(arr)

    var prod = 1
    for (var i=0; i< arr.length; i++)
    {
        if (greaterArray[i] != -1 && nextSmaller[greaterArray[i]] != -1){
            var elem =  arr[nextSmaller[greaterArray[i]]]
            prod *=elem
        }
        else{
            prod *= -1
        }
    }
    console.log(prod)
}