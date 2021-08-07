function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ');

    let res = [];
    findSubsets(0, arr, [], N, res);

    console.log(res.length);
}

function findSubsets (start, arr, subset, N, res) {
    let sum = findSum(subset);
    if(sum % 2 === 1){
        res.push(subset);
    }

    for(let i = start; i < N; i++){
        subset.push(arr[i]);
        findSubsets(i+1, arr, subset, N, res);
        subset.pop();
    }
}

function findSum (arr) {
    let i = 0;
    let j = arr.length-1;;
    let sum = 0;

    while (i <= j){
        if(i === j){
            sum += +arr[i];
        }
        else {
            sum += +arr[i] + +arr[j];
        }
        i++;
        j--;
    }

    return Math.abs(sum);
}

if (process.env.USER === "kartik") {
    runProgram(`3
    -8 -4 1 `);
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