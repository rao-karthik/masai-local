function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let [row, col, phrase] = input[0].trim().split(" ").map(Number);
    // console.log(row, col)
    
    let index = 1;
    let arr = [];
    for(let i = 0; i < input.length-1; i++){
        arr.push(input[index].trim());
        index++;
    }
    // console.log(arr)

    let count = 0;
    
    for(let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if(j < col-3){
                if(arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i][j+3] === 'saba'){
                    count++;
                }
            }
            if (i < row-3){
                if(arr[i][j] + arr[i+1][j] + arr[i+2][j] + arr[i+3][j] === 'saba'){
                    count++;
                }
            }
            if(i < row-3 && j < col-3){
                if(arr[i][j] + arr[i+1][j+1] + arr[i+2][j+2] + arr[i+3][j+3] === 'saba'){
                    count++;
                }
            }
            if (i > 2 && j < col-3){
                if(arr[i][j] + arr[i-1][j+1] + arr[i-2][j+2] + arr[i-3][j+3] === 'saba'){
                    count++;
                }
            }
        }
    }
    console.log(count); 
}

if (process.env.USER === "kartik") {
    runProgram(`5 5
    safer
    amjad
    babol
    aaron
    songs`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`5 5
    safer
    amjad
    babol
    aaron
    songs`);
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