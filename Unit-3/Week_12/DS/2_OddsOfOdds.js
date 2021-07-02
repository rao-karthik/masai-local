function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    let inputArr = [];
    for (let i = 2; i< input.length; i+=2){
        inputArr.push(input[i].trim().split(" ").map(Number))
    }
    // console.log(inputArr)
    
    for (let i = 0; i < inputArr.length; i++){
        let count = 0;
        for (let j = 0; j < inputArr[i].length; j++){
            if (inputArr[i][j]  % 2 == 1){
                count++;
            }
        }
        if(count % 2 == 1){
            console.log('Yes');
        }
        else {
            console.log('No');
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3
    1
    1
    2
    1 101
    2
    1 200`);
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