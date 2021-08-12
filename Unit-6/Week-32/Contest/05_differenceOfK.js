function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [N, K] = input[line++].trim().split(' ').map(Number);

        let arr = input[line++].trim().split(' ').map(Number);

        let check = checkSum (arr, N, K);
        console.log(check)
    }
}

function checkSum(arr, N, K){
    let i = 0;
    let j = 1;

    while(i < N && j < N){
        if(arr[j] - arr[i] == K && i != j){
            return 'Yes';
        }
        else if(arr[j] -  arr[i] < K){
            j++
        }
        else {
            i++
        }
    }
    return 'No';
}

if (process.env.USER === "kartik") {
    runProgram(`1
    6 0
-8 -7 5 6 6 9 `);
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