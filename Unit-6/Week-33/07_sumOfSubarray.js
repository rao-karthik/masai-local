function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    let N = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    let Q = +input[2];
    
    let line = 3;
    let prefixSum = [];

    let sum = 0;
    for(let i = 0; i < N; i++){
        sum += arr[i];
        prefixSum.push(sum);
    }
    
    for(let i = 0; i < Q; i++){
        let [j, k] = input[line++].trim().split(' ');
        let sum;
        if(prefixSum[j-2] !== undefined){
            sum = prefixSum[k-1] - prefixSum[j-2];
        }
        else {
            sum = prefixSum[k-1];
        }
        console.log(sum)
    }
}

if (process.env.USER === "kartik") {
    runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`);
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