function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ').map(Number);

        let sum = findContigiousSum(arr, N);
        console.log(sum)
    }
}

function findContigiousSum (arr, N) {

    let maxSoFar = Number.NEGATIVE_INFINITY;
    let maxEndingHere = 0;

    for(let i = 0; i < N; i++){
        maxEndingHere += arr[i];

        if (maxSoFar < maxEndingHere){
            maxSoFar = maxEndingHere;
        }

        if(maxEndingHere < 0){
            maxEndingHere = 0;
        }
    }

    return maxSoFar;
}

if (process.env.USER === "kartik") {
    runProgram(`3
    3
    1 2 3
    4
    -1 -1 0 1
    3
    2 -1 2`);
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