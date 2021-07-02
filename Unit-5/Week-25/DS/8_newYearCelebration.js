class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if(this.items.length == 0) return "underflow";
        return this.items.shift();
    }
    front() {
        return this.items[0];
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

    let N = +input[0];

    let queue = new Queue;
    const stack = new Stack

    for(let i = 1; i <= N; i++){
        let [op, X] = input[i].trim().split(" ");
        if (op == 1){
            queue.enqueue(X);
        }
        else if (op == 2){
            stack.push(X);
        }
        else if (op == 3){
            if(queue.size() === 0){
                console.log(-1);
            }
            else {
                console.log(queue.front())
            };
        }
        else if (op == 4){
            if(stack.size() === 0){
                console.log(-1);
            }
            else {
                console.log(stack.peek())
            };
        }
        else if (op == 5){
            let queueFront = queue.front();
            queue.dequeue();
            stack.push(queueFront);
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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