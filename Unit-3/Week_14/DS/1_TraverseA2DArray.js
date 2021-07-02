function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let [row, col] = input[0].trim().split(" ").map(Number)
    // console.log(row, col);

    let index = 1;
    let arr = [];
    for (let i = 0; i < input.length-1; i++){
        arr.push(input[index].trim().split(" "));
        index++;
    }
    // console.log(arr)

    let str = "";
    for( let i = 0; i < col; i++){
        for( let j = row-1; j >= 0; j--){
            str += arr[j][i] + " ";
        }
    }
    console.log(str)
}

if (process.env.USER === "kartik") {
    runProgram(`4 3
    1 8 9
    2 7 10
    3 6 11
    4 5 12`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`4 3
    1 8 9
    2 7 10
    3 6 11
    4 5 12`);
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