function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let t = +input[0];
    let line = 1;

    for(let i = 0; i < t; i++){
        let [n, wtLimit] = input[line++].trim().split(' ').map(Number);

        let wt = input[line++].trim().split(' ').map(Number);

        let ways = checkWays(wt, wtLimit, n);
        console.log(ways)
    }
}

function checkWays(wt, wtLimit, n) {
    wt = wt.sort((a, b) => b - a);

    let i = 0;
    let j = n - 1;
    let count = 0;

    while (i <= j) {
      if (wt[i] + wt[j] <= wtLimit) j--;
      i++;
      count++;
    }
    return count;
}

if (process.env.USER === "kartik") {
    runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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