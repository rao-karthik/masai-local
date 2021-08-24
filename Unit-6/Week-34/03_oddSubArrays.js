function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ').map(Number);

        let count = countSubarrays(arr, N);
        console.log(count)
    }
}

function countSubarrays (arr, n) {
    let count = 0;
    let even = 0;
    let odd = 0;
    let currPdt = 1;

    for(let i = 0; i < n; i++){
        currPdt *= arr[i];
        if(currPdt % 2 === 0){
            count += odd;
            even++;
        }
        else {
            odd++;
            count += even;
        }
    }
    
    return count;
}

if (process.env.USER === "kartik") {
    runProgram(`1
    3
    1 2 3`);
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