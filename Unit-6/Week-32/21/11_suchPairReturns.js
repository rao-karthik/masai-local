function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [N, K] = input[line++].trim().split(' ').map(Number);

        let arr = input[line++].trim().split(' ').map(Number);
        arr = arr.sort((a, b)=> a-b);

        console.log(check(arr, N, K));
    }
}

function check(arr, N, K){
    let i = 0;
    let j = N-1;
    
    let count = 0;

    while (i < j){
        if(arr[i] + arr[j] == K){
            return 1;
        }
        else if(arr[i] + arr[j] > K){
            j--;
        }
        else {
            i++;
        }
    }

    return -1;
}

if (process.env.USER === "kartik") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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