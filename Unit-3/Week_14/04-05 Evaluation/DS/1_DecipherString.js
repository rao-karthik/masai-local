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
        for(let j = 0; j < inputArr[i][0].length; j++){
            // console.log(inputArr[i][0][j])
            var str = "";
            if(j % 2 === 1){
                for(let k = 0; k < inputArr[i][0][j]; k++){
                    str+= inputArr[i][0][j-1]
                }                
            }
            if(str !== ''){
                arr.push(str)
            }
        }
        console.log(arr.join(""))
    }
}

if (process.env.USER === "kartik") {
    runProgram(``);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`2
    6
    a2b1c2
    6
    a2z1a2`);
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