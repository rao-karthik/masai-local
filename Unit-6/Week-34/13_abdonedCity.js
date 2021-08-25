function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [N, K] = input[line++].trim().split(' ').map(Number);
        let arr = input[line++].trim().split(' ').map(Number);

        let min = checkMinDist(arr, N, K);
        console.log(min)
    }
}

function checkMinDist (arr, N, K){
    let map = new Map();
    map.set(arr[0], 1);

    for(let i = 1; i < N; i++){
        arr[i] = arr[i] + arr[i-1];
        map.set(arr[i], i+1);
    }

    let len = 999999999999999;
    console.log(map)

    for(let i = 0; i < N; i++){
        if(arr[i] < K){
            continue;
        }
        else {
            let diff = arr[i] - K;

            if(diff >= 0){
                len = Math.min(len, i);
            }

            if(!map.has(diff)){
                continue;
            }
            else {
                len = Math.min(len, i - map.get(diff));
            }
        }
    }

    if(len === 999999999999999){
        return -1;
    }
    
    return len;
}

if (process.env.USER === "kartik") {
    runProgram(`2
    5 13
    5 1 2 3 4 
    1 10
    1`);
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