function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    let inputArr = [];
    for(let i = 1; i < input.length; i++){
        inputArr.push(input[i].trim().split(" ").map(Number));
    }
    // console.log(inputArr);

    for (let i = 0; i < inputArr.length; i++){
        let sum = 0;
        for(let j = 0; j < inputArr[i].length; j++){
            sum += inputArr[i][j];
        }

        if (sum % 3 === 0 && inputArr[i][0] <= (sum/3) && inputArr[i][1] <= (sum/3) && inputArr[i][2] <= (sum/3)){
            console.log('Yes');
        }
        else {
            console.log('No');
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`4
5 3 1 9 
100 101 102 105 
10 20 15 14 
101 101 101 3`);
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