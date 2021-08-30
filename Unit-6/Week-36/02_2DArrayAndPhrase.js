function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    let [rows, cols] = input[0].trim().split(' ').map(Number);

    let arr = [];
    for(let i = 1; i <= rows; i++){
        arr.push(input[i].trim().split(''));
    }

    let countHorizontal = checkHorizontal(arr, rows, cols);
    let countVertical = checkVertical(arr, rows, cols);
    let countUpDiagonal = checkUpDiagonal(arr, rows, cols);
    let countDownDiagonal = checkDownDiagonal(arr, rows, cols);
    
    let total = countHorizontal + countVertical + countUpDiagonal + countDownDiagonal;
    console.log(total)
}

function checkHorizontal (arr, rows, cols) {
    let count = 0;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols-3; j++){
            if(arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i][j+3] === 'saba'){
                count++;
            }
        }   
    }

    return count;
}
function checkVertical (arr, rows, cols) {
    let count = 0;

    for(let j = 0; j < cols; j++){
        for(let i = 0; i < rows-3; i++){
            if(arr[i][j] + arr[i+1][j] + arr[i+2][j] + arr[i+3][j] == 'saba'){
                count++;
            }
        }
    }

    return count;
}
function checkUpDiagonal (arr, rows, cols) {
    let count = 0;

    for(let i = rows-1; i > 2; i--){
        for(let j = 0; j < cols-3; j++){
            if(arr[i][j] + arr[i-1][j+1] + arr[i-2][j+2] + arr[i-3][j+3] === 'saba'){
                count++;
            }
        }
    }

    return count;
}
function checkDownDiagonal (arr, rows, cols) {
    let count = 0;

    for(let i = 0; i < rows-3; i++){
        for (let j = 0; j < cols-3; j++){
            if(arr[i][j] + arr[i+1][j+1] + arr[i+2][j+2] + arr[i+3][j+3] == 'saba'){
                count++;
            }
        }
    }

    return count;
}

if (process.env.USER === "kartik") {
    runProgram(`5 5
    safer
    aajaa
    babbl
    aaaan
    ssngs`);
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