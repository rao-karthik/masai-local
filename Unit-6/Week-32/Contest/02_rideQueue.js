function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 1; i <= tests; i++){

        let N = +input[line++];

        let A = input[line++].trim().split(" ").map(Number);

        let rounds = totalRounds(A, N);
        console.log(rounds)
    }
}

function totalRounds (A, N){
    let count = 1

    for(let j=0; j < N; j++){
        if(A[j] >= A[j+1]){
            count++
        }
    }

    return count;
}

if (process.env.USER === "kartik") {
    runProgram(`1
    8
    1 3 2 4 4 5 3 6`);
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