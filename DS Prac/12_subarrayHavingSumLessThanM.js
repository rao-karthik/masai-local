function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [ N, M ] = input[line++].trim().split(" ").map(Number);

        let arr = input[line++].trim().split(" ").map(Number);

        let count = findSumLessThanM(arr, N, M);
        console.log(count)
    }
}

function findSumLessThanM (arr, N, M) {
    let start = 0; 
    let end = 0;
    let temp = 0;
    let count = 0;
    let sum = arr[0];

    while(start < N && end < N){
        if(sum < M){
            temp++;
            end++;
            count += temp;
            if(end < N){
                sum += arr[end];
            }
        }
        else {
            sum -= arr[start];
            start++;
            temp--;
        }
    }
    return count;
}

if (process.env.USER === "kartik") {
    runProgram(`1
    5 5
    1 5 1 3 2`);
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