function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);

    let count = [];
    findSubsets(0, [], arr, count);

    console.log(count.length);
}

function findSubsets (start, subset, arr, count) {
    let small = checkSmallest(subset);
    if(small){
        count.push(1);
    }

    for(let i = start; i < arr.length; i++){
        subset.push(arr[i]);
        findSubsets(i+1, subset, arr, count); 
        subset.pop();
    }
}

function checkSmallest(subset){
    let firstEle = subset[0];

    let min = Math.min(...subset);

    if(firstEle === min){
        return true;
    }
    return false;
}

if (process.env.USER === "kartik") {
    runProgram(`3
    3 2 1`);
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