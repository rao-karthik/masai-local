function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input)
    
    let inputArr = [];
    for(let i = 2; i < input.length; i+=2){
        inputArr.push(input[i].trim().split(" "));
    }
    // console.log(inputArr)

    for(let i = 0; i < inputArr.length; i++){
        const arr = []
        let count = 0;
        let length = inputArr[i][0].length;
        if(inputArr[i][0][inputArr[i][0][length-1]] !== inputArr[i][0][inputArr[i][0][length-2]]){
            for(let j = 0; j < inputArr[i][0].length; j++){
                // console.log(inputArr[i][0][j])
            }
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(``);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`2
    6
    aabcc
    6
    aazaa`);
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