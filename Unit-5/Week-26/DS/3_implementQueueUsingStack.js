class Queue {
    constructor()
    {
        this.S1 = new Stack()
        this.S2 = new Stack()
    }
    push(value) {
    	this.S1.push(value)
    }
    pop() {
     	if(this.S2.length === 0){
         	while(this.S1.length !== 0){
          		let popped = this.S1.pop();
              	this.S2.push(popped);
            }
        }
      	this.S2.pop();
    }
    front() {
    	if(this.S2.length === 0){
         	while(this.S1.length !== 0){
          		let popped = this.S1.pop();
              	this.S2.push(popped);
            }
        }
      	console.log(this.S2[this.S2.length-1]);
    }
    isEmpty() {
    	//write your code here..
    }
}
function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let T = +input[0];
    let line = 1;

    let queue = [];
    let newQueue = [];
  
    for(let i = 0; i < T; i++){
        let [X, Y] = input[line++].trim().split(' ').map(Number);
        if(X == 0){
            queue.push(Y);
        }
        else if (X == 1) {
            if(newQueue.length === 0){
                while(queue.length !== 0){
                    let popped = queue.pop();
                    newQueue.push(popped);
                }
            }
            console.log(newQueue[newQueue.length-1]);
        }
        else if (X == 2) {
            if(newQueue.length === 0){
                while(queue.length !== 0){
                    let popped = queue.pop();
                    newQueue.push(popped);
                }
            }
           newQueue.pop();
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`15
    0 627
    0 967
    0 201
    0 752
    0 425
    0 874
    0 430
    2
    2
    2
    2
    2
    2
    1
    1`);
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