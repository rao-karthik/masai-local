function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let arr = [];
    for (let i = 1; i < input.length; i++){
        arr.push(input[i].trim().split(' ').map(Number));
    }
    // console.log(arr)

    for(let i = 0; i < arr.length; i++){
        let num = 0
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === 1){
                num += (j+1)*0
            }
            else if(arr[i][j] === 0){
                num += (j+1) * 1;
            }
        }
        console.log(num)
    }
}

if (process.env.USER === "kartik") {
    runProgram(``);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`5
    1 0 0 1 0`);
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