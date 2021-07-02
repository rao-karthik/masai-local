function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input);
    // let tests = +input[0].trim()
    // console.log(tests)

    // let line = 1;
    // let inputArr = [];
    // for(let i = 0; i < tests; i++){
    //     let [row, col] = input[line++].trim().split(" ").map(Number);
    //     let mat = [];
    //     for(let j = 0; j < row; j++){
    //         mat.push(input[line++].trim().split(" "))
    //     }
    //     inputArr.push(mat)
    // }
    // console.log(inputArr)

    // for (let i = 0; i < tests; i++){
    //     let len = inputArr[i].length;
    //     for(let j = len-1; j >= 0; j--){
    //         let str
    //         for(let k = 0; k < inputArr[i][j].length; k++){
    //             if
    //         }
    //     }
    // }
    let [row, col] = input[0].trim().split(" ").map(Number);
    console.log(row, col);

    let inputArr = [];
    for(let i = 1; i < input.length; i++){
        inputArr.push(input[i].trim().split(' '))
    }
    console.log(inputArr);

    var str = "";
    for(let i = 0; i < col; i++){
        for(let j = 0; j < row-i; j++){
            str += inputArr[j][i] + " ";
        }
        // for(let j = i+1; j < col; j++){
        //     str += inputArr[col-1-i][j] + " "
        // }
    }
    console.log(str);
}

if (process.env.USER === "kartik") {
    runProgram(`3 4
    2 4 6 5 
    3 2 5 2
    4 7 5 1`
   );
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`2
    9
    2 4 6 7 6 6 3 4 7
    3 2 5 8 4 7 9 4 8
    4 7 5 5 7 2 7 7 4
    8 5 9 2 6 9 6 4 8
    5 8 2 7 4 1 4 2 4
    1 1 1 9 9 7 3 3 8
    2 8 1 4 8 7 5 3 4
    9 7 7 2 1 2 8 2 9
    1 2 1 2 2 5 1 4 9
    6
    4 4 9 7 5 5
    7 1 5 6 1 8
    1 5 7 5 1 6
    9 3 8 1 6 4
    6 7 5 2 3 1
    1 1 4 1 7 2`);
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