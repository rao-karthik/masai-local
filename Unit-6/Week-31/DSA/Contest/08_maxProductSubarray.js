function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ').map(Number);

        console.log(maxSubarrayPdt(arr, N));
    }
}

function maxSubarrayPdt(arr,n){
    let minSub = arr[0];
    let maxSub = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < n; i++)
    {
        if (arr[i] < 0)
        {
            let temp = max;
            maxSub = minSub;
            minSub =temp;
        }
        maxSub = Math.max(maxSub * arr[i], arr[i]);
        minSub = Math.min(minSub * arr[i], arr[i]);
    
        max = Math.max(max, maxSub);
    }
    
    return max;
}

if (process.env.USER === "kartik") {
    runProgram(`2
    3
    -3 0 -2
    4
    4 5 -1 2`);
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