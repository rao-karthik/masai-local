function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ').map(Number);

        let nums = checkMissAndDouble(arr, N);
        console.log(nums.join(' '))
    }
}

function checkMissAndDouble (arr, N) {

    let map = new Map();
    let double;

    for(let i = 0; i < N; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1);
            double = arr[i];
        }
        else {
            map.set(arr[i], 1);
        }
    }

    let missing;

    for(let i = 1; i <= N; i++){
        if(arr[i-1] !== i){
            missing = i;
        }
    }

    return [missing, double];
}

if (process.env.USER === "kartik") {
    runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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