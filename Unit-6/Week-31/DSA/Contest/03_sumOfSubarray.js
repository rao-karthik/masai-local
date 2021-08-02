function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);

    let tests = +input[2];

    let line = 3;

    for(let i = 0; i < tests; i++){
        let [L, R] = input[line++].trim().split(' ').map(Number);

        L = L-1;
        R = R-1;
        
        let mid = Math.floor((L + R)/2)

        let sum = 0;

        while (L < mid){
            if(R === mid){
                sum += arr[L];
            }
            else {
                sum += arr[L] + arr[mid];
            }
            L++;
            mid--;
        }

        while (mid < R){
            if(R === mid){
                sum += arr[mid];
            }
            else {
                sum += arr[mid] + arr[mid];
            }
            mid++;
            R--;
        }

        console.log(sum);
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