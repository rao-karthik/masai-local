function runProgram(input){
    input = +input.trim();

    let chess = [];
    for(let i=0; i<input; i++){
        let arr = new Array(input).fill(0)
        chess.push(arr)
    }

    let ans = []
    nQueen(chess, 0, ans)
    console.log(ans.length);
}

function nQueen(chess, row, ans){
    if(row >= chess.length){
        ans.push(1)
        return ans;
    }
    else {
        for(let col = 0; col < chess.length; col++){
            if(isQueenSafe(chess, row, col)){
                chess[row][col] = 1;
                nQueen(chess, row+1, ans);
                chess[row][col] = 0;
            }
        }
    }
}

function isQueenSafe(chess, row, col){
    //vertical check
    for(let i = row-1; i >= 0; i--){
        if(chess[i][col] == 1){
            return false
        }
    }
    //left diagonal check
    for(let i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--){
        if(chess[i][j] == 1){
            return false
        }
    }
    //right diagonal check
    for(let i = row-1, j = col+1; i >= 0 && j < chess.length; i--, j++){
        if(chess[i][j] == 1){
            return false
        }
    }
    return true
}

if (process.env.USER === "kartik") {
    runProgram(`4`);
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