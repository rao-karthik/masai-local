function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    let inputArr = [];
    
    for (var  i = 2; i < input.length; i+= 2){
        inputArr.push(input[i].trim().split(" ").map(Number))
    }
    
    // console.log(inputArr)

    for(var i = 0; i < inputArr.length; i ++){
        let count = 0;
        for (j = 0; j < inputArr[i].length; j++){
            count += inputArr[i][j]
        }
        if(count % 2 == 0){
            console.log("No");
        }
        else {
            console.log("Yes");
        }
    }

}

if (process.env.USERNAME === "Kartik") {
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