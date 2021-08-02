function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests =+input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [N, K] = input[line++].trim().split(" ").map(Number);

        let nums = input[line++].trim().split(" ");

        console.log(findElement(nums, N, K));
    }
}

function countChars(num, K){
    let count = 0;
    while (num > 0){
        if (num % 10 == K){
            count++;
        }
        num = Math.floor(num / 10);
    }
    return count;
}

function findElement(arr, N, k){
    let ans = []
    for(let i = 0; i < N; i++){

        let count = countChars(arr[i], k)

        if (ans.length === 0) {
            ans.push(count, arr[i])
        } 
        else if (ans[0] === count) {
            if (+ans[1] < +arr[i]) {
                ans[0] = count;
                ans[1] = arr[i];
            }
        } 
        else if (ans[0] < count) {
            ans[0] = count;
            ans[1] = arr[i];
        }
    }
    return ans[1];
}

if (process.env.USER === "kartik") {
    runProgram(`2
    5 2
    222 2221 12221 2222 12
    5 2
    222 2221 12221 2212 12`);
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

function countFreq(N, K){
    let count = 0;
    while (N > 0){
        if (N % 10 == K){
            count++;
        }
        N = Math.floor(N / 10);
    }
    return count;
}