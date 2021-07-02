function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0]
    // console.log(tests)
    
    let line = 1;
    let inputArr = [];
    for (let i = 0; i < tests; i++){
        let len = +input[line++].trim();
        let mat = [];
        for(let j = 0; j < len; j++){
            mat.push(input[line++].trim().split(" "))
        }
        inputArr.push(mat);
    }
    // console.log(inputArr)

    for(let i = 0; i < inputArr.length; i++){
        let bottom = inputArr[i].length-1;
        let right = inputArr[i].length-1;

        let str = ""

        if(inputArr[i].length === 1){
            str = inputArr[i][0][0]
        }

        else {
            for(let j = bottom; j >= 0; j--){
                str += inputArr[i][j][0] + " ";
            }
    
            for(let j = 1; j < right; j++){
                str += inputArr[i][0][j] + " ";
            }
    
            for (let j = 0; j <= right; j++){
                str += inputArr[i][j][right] + " ";
            }
    
            for(let j = bottom-1; j > 0; j--){
                str += inputArr[i][bottom][j] + " ";
            }
        }

        console.log(str);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`1
    1
    18`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`1
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
    `);
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