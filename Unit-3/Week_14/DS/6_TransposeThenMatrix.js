function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let [row, col, phrase] = input[0].trim().split(" ").map(Number);
    // console.log(row, col)
    
    let index = 1;
    let arr = [];
    for(let i = 0; i < input.length-1; i++){
        arr.push(input[index].trim().split(" "));
        index++;
    }
    // console.log(arr)

    for(let i = 0; i < col; i++){
        let str = "";
        for(let j = 0; j < row; j++){
            str+= arr[j][i] + " ";
        }
        console.log(str)
    }
}  

if (process.env.USER === "kartik") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
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