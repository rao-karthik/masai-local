function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [row, col] = input[line++].trim().split(' ').map(Number);

        let arr = [];

        for(let i = 0; i < row; i++){
            arr.push(input[line++].trim().split(' ').map(Number));
        }

        let ans = recTraverse(arr, row, col);
        console.log(ans.join(' '));
    }
}

function recTraverse (arr, row, col){
    let [left, right, top, bottom] = [0, col-1, 0, row-1];
    let ans = [];

    while(left <= right && top <= bottom){
        for(i = top; i <= bottom; i++){
            ans.push(arr[i][left]);
        }
        left++;

        for(i = left; i <= right; i++){
            ans.push(arr[bottom][i]);
        }
        bottom--;

        for(let i = bottom; i >= top; i--){
            ans.push(arr[i][right]);
        }
        right--;

        for(let i = right; i >= left; i--){
            ans.push(arr[top][i]);
        }
        top++;
    }

    let len = row*col;
    ans = ans.slice(0, len);

    return ans;
}

if (process.env.USER === "kartik") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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