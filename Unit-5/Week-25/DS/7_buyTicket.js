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

function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let N = +input[0];

    let queue = new Queue;

    for(let i = 1; i <= N; i++){
        let [op, x] = input[i].trim().split(" ");
        if(op === 'E'){
            queue.enqueue(x);
            console.log(queue.size());
        }
        else if (op === 'D'){
            let dequeueItem;
            if (queue.size() === 0){
                dequeueItem = -1;
            }
            else {
                dequeueItem = queue.front();
            }
            queue.dequeue();
            console.log(dequeueItem + " " + queue.size())
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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