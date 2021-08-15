function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let [R, C, P] = input[0].trim().split(' ').map(Number);
    
    let arr = [];
    for(let i = 1; i <= R; i++){
        arr.push(input[i].trim().split(' ').map(Number));
    }

    let horizontal = horizontalCount(arr, R, C, P);

    let vertical = verticalCount(arr, R, C, P);

    let diagonalL = diagonalLCount(arr, R, C, P);

    let diagonalR = diagonalRCount(arr, R, C, P);

    let total = horizontal + vertical + diagonalL + diagonalR;
    console.log(total)
}

function horizontalCount(arr, row, col, P){
    let count = 0;

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col-2; j++){
            if(arr[i][j] * arr[i][j+1] * arr[i][j+2] === P){
                count++;
            }
        }
    }

    return count;
}

function verticalCount(arr, row, col, P){
    let count = 0;

    for(let i = 0; i < row-2; i++){
        for(let j = 0; j < col; j++){
            if(arr[i][j] * arr[i+1][j] * arr[i+2][j] === P){
                count++;
            }
        }
    }

    return count;
}

function diagonalLCount (arr, row, col, P){
    let count = 0;

    for(let i = 0; i < row-2; i++){
        for(let j = 0; j < col-2; j++){
            if(arr[i][j] * arr[i+1][j+1] * arr[i+2][j+2] === P){
                count++;
            }
        }
    }

    return count;
}

function diagonalRCount (arr, row, col, P){
    let count = 0;

    for(let i = 0; i < row-2; i++){
        for(let j = col-1; j >= 2; j--){
            if(arr[i][j] * arr[i+1][j-1] * arr[i+2][j-2] === P){
                count++;
            }
        }
    }

    return count;
}

if (process.env.USER === "kartik") {
    runProgram(`3 3 6
    3 2 1
    2 2 2
    1 5 1`);
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