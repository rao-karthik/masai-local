function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    const [row, col] = input[0].trim().split(' ').map(Number);
    // console.log(row, col)

    let elem = input[input.length-1].trim();
    // console.log(elem)
    
    let line = 1;
    let inputArr = [];
    for (let i = 1; i < input.length-1; i++){
        inputArr.push(input[line++].trim().split(' '));
    }
    // console.log(inputArr)

    var sumStr = "";
    let diffStr = "";
    for(let i = 0; i < row; i++){
        for(let j = 0; j< col; j++){
            if(inputArr[i][j] === elem){
                var sum = i + j;
                var diff = i - j
            }
        }
    }
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if (i + j === sum){
                sumStr += inputArr[i][j] + " ";
            }
            if (i - j === diff){
                diffStr += inputArr[i][j] + " ";
            }
        }
    }
    console.log(diffStr)
    console.log(sumStr)
    
}

if (process.env.USER === "kartik") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9
    6`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9
    6`);
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