function runProgram(input){
    input = +input;

    let arr = [];
    for(let i = 0; i < input; i++){
        arr.push(i+1);
    }
    
    findSubsets(0, [], arr);
}

function findSubsets (start, subset, arr) {
    console.log(subset.join(' '));

    for(let i = start; i < arr.length; i++){
        if(i > start && arr[i-1] === arr[i]){
            continue;  
        }
        subset.push(arr[i]);
        findSubsets(i+1, subset, arr);
        subset.pop();
    }
}

if (process.env.USER === "kartik") {
    runProgram(`10`);
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