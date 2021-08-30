function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    let arr = [];

    for(let i = 0; i < 3; i++){
        arr.push(input[i].trim().split(' '));
    }

    let winner = checkWinner(arr);
    console.log(winner)
}

function checkWinner (arr){
    let horizontal = checkHorizontal(arr);
    let vertical = checkVertical(arr);
    let downDiagonal = checkDownDiagonal(arr);
    let upDiagonal = checkUpDiagonal(arr);
    
    return horizontal? horizontal : vertical? vertical : downDiagonal? downDiagonal : upDiagonal
}

function checkHorizontal (arr) {
    for(let i = 0; i < 3; i++){
        if(arr[i][0] === arr[i][1] && arr[i][0] === arr[i][2]){
            return arr[i][0];
        }
    }
}

function checkVertical (arr){
    for(let i = 0; i < 3; i++){
        if(arr[0][i] === arr[1][i] && arr[0][i] === arr[2][i]){
            return arr[0][i];
        }
    }
}

function checkDownDiagonal (arr) {
    if(arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]){
        return arr[0][0];
    }
}

function checkUpDiagonal (arr){
    if(arr[2][0] === arr[1][1] && arr[2][0] === arr[0][2]){
        return arr[2][0];
    }
}

if (process.env.USER === "kartik") {
    runProgram(`o o x
    o x x
    x o x`);
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