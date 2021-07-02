function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    let inputArr = [];
    for (let i = 2; i < input.length; i+=2){
        inputArr.push(input[i].trim().split(" ").map(Number));
    }
    // console.log(inputArr)

    for (let i = 0; i < inputArr.length; i++){
        let weightedSum = 0;
        for (let j = 0; j < inputArr[i].length; j++){
            weightedSum += inputArr[i][j] * (j+1)
        }
        console.log(weightedSum);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`);
} else {
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