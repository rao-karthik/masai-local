function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let [row, col, sum] = input[0].trim().split(" ").map(Number);
    // console.log(row, col, sum)
    
    let index = 1;
    let arr = [];
    for(let i = 0; i < input.length-1; i++){
        arr.push(input[index].trim().split(" ").map(Number));
        index++;
    }
    // console.log(arr)

    let count = 0;
    
    for(let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if(j < col-2){
                if(arr[i][j] + arr[i][j+1] + arr[i][j+2] === sum){
                    count++;
                }
            }
            if (i < row-2){
                if(arr[i][j] + arr[i+1][j] + arr[i+2][j] === sum){
                    count++;
                }
            }
            if(i < row-2 && j < col-2){
                if(arr[i][j] + arr[i+1][j+1] + arr[i+2][j+2] === sum){
                    count++;
                }
            }
            if (i > 1 && j < col-2){
                if(arr[i][j] + arr[i-1][j+1] + arr[i-2][j+2] === sum){
                    count++;
                }
            }
        }
    }
    console.log(count);
}

if (process.env.USER === "kartik") {
    runProgram(`3 3 6
    3 2 1
    2 2 2
    1 5 1`);
} 
else if (process.env.USERNAME === "kartik") {
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