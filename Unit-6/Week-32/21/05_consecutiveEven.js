function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let nums = input[line++].trim().split(' ').map(Number);

        let check = checkConsecutive(nums, N);

        if(check){
            console.log('Yes');
        }
        else {
            console.log('No');
        }
    }
}

function checkConsecutive(arr, N){
    for(let i = 0; i < N-2; i++){
        if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0 && arr[i+2] % 2 === 0){
            return true;
        }
    }
    return false;
}

if (process.env.USER === "kartik") {
    runProgram(`2
    3
    1 2 3
    5
    1 2 4 6 8`);
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