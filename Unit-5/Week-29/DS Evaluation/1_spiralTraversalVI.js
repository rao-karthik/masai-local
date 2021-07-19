function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;
    
    for(let i = 0; i < tests; i++){
        let N = +input[line++].trim();

        let arr = [];
        for(let i = 0; i < N; i++){
            arr.push(input[line++].trim().split(' '));
        }

        spiralTraversal(arr, N)
    }
}

if (process.env.USER === "kartik") {
    runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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

function spiralTraversal(arr, N) {
    let [left, right, top, bottom] = [0, N-1, 0, N-1];

    let newArr = [];

    while(left <= right && top <= bottom){
        for(let i = top; i <= bottom; i++){
            newArr.push(arr[i][left]);
        }
        left++;
        for(let i = left; i <= right; i++){
            newArr.push(arr[bottom][i]);
        }
        bottom--;
        for(let i = bottom; i >= top; i--){
            newArr.push(arr[i][right]);
        }
        right--;
        for(let i = right; i >= left; i--){
            newArr.push(arr[top][i]);
        }
        top++;
    }

    let len = N * N;
    newArr = newArr.slice(0, len);
    console.log(newArr.join(" "));
}