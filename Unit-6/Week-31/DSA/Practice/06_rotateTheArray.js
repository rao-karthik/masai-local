function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1

    for(let i = 0; i < tests; i++){
        let [N, K] = input[line++].trim().split(' ').map(Number);

        let arr = input[line++].trim().split(' ').map(Number);
        
        rotateArr(arr, K, N)
        console.log(arr.join(' '));
    }
}

function rotateArr(A, K, N) {

    if(N < K){
        K = K % N;
    }

    reverseString(A, 0, N-K-1);
    reverseString(A, N-K, N-1);
    reverseString(A, 0, N-1);
}

function reverseString (arr, l, r) {
    while (l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2`);
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