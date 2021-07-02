function PriorityQueue() {
    let items = [];
    function QueueElement (element, priority){
        this.element = element;
        this.priority = priority
    }
}

this.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority);
    let added = false;
    
    for(let i = 0; i < items.length; i++){
        if(queueElement.priority < items[i].priority){
            items.splice(i, 0, queueElement);
            added = true;
            break;
        }
    }
    if(!added) {
        this.items.push(queueElement);
    }
}
this.dequeue = function() {
    if(items.length == 0) return "underflow";
    return items.shift();
}
this.front = function() {
    return items[0];
}
this.isEmpty = function() {
    return items.length == 0;
}
this.clear = function() {
    return itsms = [];
}
this.size = function() {
    return items.length;
}
this.print = function() {
    console.log(items.toString());
}

function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    console.log(input)

    let N = +input[0];

    let queue = new PriorityQueue;

    for (let i = 1; i <= N; i++){
        let [op, club, rollNo] = input[i].trim().split(" ");
        if(op === 'E'){
            let stud = [club, rollNo];
            queue.enqueue(stud, club);
        }
        if(op === 'D'){
            let front = queue.front();
            queue.dequeue();
            console.log(front);
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
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