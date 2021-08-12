function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for (i = 0; i < tests; i++) {
        let overs = +input[line++];
        let runs = input[line++].trim().split(" ").map(Number);

        checkMotm(runs)
    }
}

function checkMotm(runs) {
    let Kohli = 0;
    let De = 0;
    let strike = 'D'; 

    for (let i = 0; i < runs.length; i++) {
        if (strike == 'D') {
            De += runs[i];
        } 
        else {
            Kohli += runs[i];
        }
        if (runs[i] == 1 || runs[i] == 3) {
            if (strike == 'D') {
                strike = 'K';
            } 
            else if (strike == 'K') {
                strike = 'D';
            }
        }

        if ((i+1) % 6 == 0) {
            if (strike == 'D') {
                strike = 'K';
            } 
            else if (strike == 'K') {
                strike = 'D';
            }
        }
    }

    if (Kohli > De) {
        console.log("Virat Kohli");
    } 
    else if (De > Kohli) {
        console.log("AB de Villiers");
    } 
    else {
        console.log("Tie");
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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