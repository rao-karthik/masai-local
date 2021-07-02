function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let inputArr = [];
    for ( let i = 1; i < input.length; i++){
        inputArr.push(input[i].trim().split(" ").map(Number));
    }
    
    for (let i = 1; i < inputArr.length; i+=2){
        let sum = +inputArr[i-1][1];
        let flag = false;
        let arr = [];
        for(let j = 0; j < inputArr[i].length-1; j++){
            for(let k = j+1; k < inputArr[i].length; k++){
                if(inputArr[i][j] + inputArr[i][k] === sum){
                    flag = true;
                    arr.push(`${j} ${k}`)
                }
            }
        }
        if(flag === true){
            console.log(arr[0])
        }
        else {
            console.log('-1 -1')
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
} 
else if (process.env.USERNAME === "kartik") {
        runProgram(`3
        4 9
        2 7 11 15
        5 10
        1 2 3 5 5
        2 100
        48 49`);
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