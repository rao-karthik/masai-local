function runProgram(input) {
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for (i = 0; i < tests; i++) {
        let N = +input[line++];

        let arr = input[line++].trim().split(" ").map(Number);

        console.log(goodPairs(arr, N));
    }
}
function goodPairs(arr, N) {
    arr = arr.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < N; i++){
        for (let j = i + 1; j < N; j++){
            if (arr[j] == 2 * arr[i]) {
                count++;
            }
        }
    }
    return count;
}

if (process.env.USER === "kartik") {
    runProgram(`2
    5
    1 1 1 1 1
    6
    1 1 2 2 4 1`);
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