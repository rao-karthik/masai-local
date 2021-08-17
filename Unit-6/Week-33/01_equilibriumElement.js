function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);
    
    let num = checkEquilibrium(arr, N);
    
    if(num === -1){
        console.log(-1);
    }
    else {
        console.log(arr[num]);
    };
}

function checkEquilibrium (arr, N){
    for(let i = 1; i < N; i++){
        let sum = 0;
        for(let j = 0; j < i; j++){
            sum += arr[j];
        }
        if(sum === arr[i]){
            return i;
        }
    }
    return -1;
}

if (process.env.USER === "kartik") {
    runProgram(`5
    3 3 5 5 1`);
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