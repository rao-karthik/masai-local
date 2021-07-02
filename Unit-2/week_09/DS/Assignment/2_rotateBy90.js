function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    
    var n = +input[0];
    // console.log(n);

    var inputArr = []
    for(let i = 1; i <= n; i++){
        let data = input[i].trim().split(" ");
        inputArr.push(data)
    }
    // console.log(inputArr);
    
    var newArr = []
    for(let i = inputArr.length-1; i >= 0; i--){
        // console.log(inputArr[i])
        let str = ""
        for(let j = 0; j < inputArr[i].length; j++){
            // console.log(inputArr[i][j]);
            str+= inputArr[j][i] + " "
        }
        newArr.push(str)
    }
    // console.log(newArr);

    for(var i = 0; i < newArr.length; i++){
        console.log(newArr[i]);
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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