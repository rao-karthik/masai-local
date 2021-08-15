function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [rows, cols] = input[line++].trim().split(' ').map(Number);

        let arr = [];

        for(let j = 0; j < rows; j++){
            arr.push(input[line++].trim().split(' '));
        }

        detectL(arr, rows, cols)
    }
}

function detectL (arr, rows, cols){
    let [left, right, top, bottom] = [0, cols-1, 0, rows-1];
    let newArr = [];

    while(left <= right){
        for(let i = top; i < bottom; i++){
            newArr.push(arr[i][left]);
        }
        for(let i = left; i <= right; i++){
            if(arr[bottom] != undefined){
                newArr.push(arr[bottom][i])
            }
        }
        bottom--;
        left++;
    }

    console.log(newArr.join(' '));
}

if (process.env.USER === "kartik") {
    runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    2 3
    1 2 3
    4 5 6`);
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