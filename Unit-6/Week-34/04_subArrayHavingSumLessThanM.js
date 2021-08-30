function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [n, k] = input[line++].trim().split(' ').map(Number);

        let arr = input[line++].trim().split(' ').map(Number);

        const count = countSubarrays(arr, n, k);
        console.log(count)
    }
}

function countSubarrays(arr, n, M){
    let start = 0, end = 0, count = 0, sum = arr[0];

    while(start < n && end < n){
        if(sum < M){
            end++;

            if(end >= start){
                count += end - start;
            }

            if (end < n){
                sum += arr[end];
            }
        }
        else {
            sum -= arr[start];
            start++;
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