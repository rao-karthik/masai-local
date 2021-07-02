function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let Q = +input[0];
    let queue = [];
    let obj = {};

    for (let i = 1; i <= Q; i++){
        let [op, club, rollNo] = input[i].trim().split(" ");
        // console.log(op, club, rollNo)
        if(op === 'E'){
            let stud = [+club, +rollNo];
            // console.log(stud)
            if(queue.length === 0){
                queue.push(stud);
            }
            else {
                let index = checkMember(queue, +club);
                // console.log(index)
                // console.log(stud)
                if(index === -1){
                    queue.push(stud);
                }
                else {
                    queue.splice(index+1, 0, stud)
                }
            }
        }
        else if(op === 'D'){
            console.log(queue[0].join(' '));
            queue.shift();
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

function checkMember(q, club, rollNo){
    let i = 0;
    while (i < q.length){
        if(q[i][0] === club){
            return i;
        }
        i++;
    }
    return -1;
}