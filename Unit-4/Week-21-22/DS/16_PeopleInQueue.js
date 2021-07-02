function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input);

    let [K, Q] = input[0].trim().split(" ").map(Number);
    // console.log(K, Q);
    let queue = [];
    // console.log(queue)

    for(let i = 1; i <= Q; i++){
        let [type, X] = input[i].trim().split(" ").map(Number);
        // console.log(type, X);

        if (type === 1){
            queue.push(X);
            if(queue.length > K){
                console.log(-1);
                queue.splice(K);
            }
            else {                
                console.log(X);
            }
            queue.splice(K);
        }
        else if (type === 2) {
            if(queue.length === 0){
                console.log(-1);
            }
            else {
                console.log(queue[0]);
                queue.shift();
            }
        }
        // console.log(queue);
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`2 6
    1 1
    1 2
    1 3
    2
    2
    2`);
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