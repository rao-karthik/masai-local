function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    
    let [wt, trkAvailable] = input[0].trim().split(' ').map(Number);

    let capacity = input[1].trim().split(' ').map(Number);

    console.log(possibleWays(wt, capacity, 0));
}

function possibleWays (n, arr, k){
    if(n === k){
        return 1;
    }
    else if (n < k) {
        return 0;
    }
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        count += possibleWays(n, arr, k+arr[i])
    }
    return count;
}


if (process.env.USER === "kartik") {
    runProgram(`3 3
    1 2 3`);
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