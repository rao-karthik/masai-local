function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++].trim();
        // console.log(N)

        let dir = input[line++].trim().split("");
        // console.log(dir)
        let [L, R, U, D] = [-1, 1, 1, -1];

        let initialPos = [ 0, 0 ];
        let currtentPos = [ 0, 0 ];

        for(let i = 0; i < N; i++){
            if(dir[i] === 'R'){
                currtentPos[0] += R;
            }
            else if(dir[i] === 'L'){
                currtentPos[0] += L;
            }
            else if(dir[i] === 'U'){
                currtentPos[1] += U;
            }
            else if(dir[i] === 'D'){
                currtentPos[1] += D;
            }
        }
        if(currtentPos[0] === 0 && currtentPos[1] === 0){
            console.log('Yes');
        }
        else {
            console.log('No');
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`2
    5
    RLRUD
    4
    LRUD`);
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