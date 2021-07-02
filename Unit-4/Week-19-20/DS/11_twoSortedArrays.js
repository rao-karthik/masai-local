function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0];

    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++].trim();
        // console.log(N)
        let A = input[line++].trim().split(" ").map(Number);
        let B = input[line++].trim().split(" ").map(Number);
        
        let count = 0;

        let l = 0;
        let r = N-1;

        while(l <= N && r >= 0){
            if(A[l] == B[r]){
                count++;
                l++;
                r--;
            }
            else if(A[l] > B[r]){
                r--;
            }
            else {
                l++;
            }
        }
        console.log(count);
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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