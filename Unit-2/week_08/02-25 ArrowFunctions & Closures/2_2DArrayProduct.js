function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var one = input[0].trim().split(" ").map(Number);
    // console.log(one)

    var product = one[2];
    var inputArr = [];
    for(var i = 1; i < input.length; i++){
        var inputStr = input[i].trim().split(" ").map(Number);
        inputArr.push(inputStr);
    }
    // console.log(inputArr)

    var count = 0

    var horizontalCount = ()=>{
        // var count = 0
        for(var i = 0; i < inputArr.length; i++){
            for(var j = 0; j < inputArr[i].length; j++){
                if((inputArr[i][j] * inputArr[i][j+1] * inputArr[i][j+2]) == product){
                    count++;
                }            
            }
        }
        return(count)
    }
    horizontalCount()

    var verticalCount = ()=>{
        // var count = 0;
        for(var i = 0; i < inputArr.length-2; i++){
            for(var j = 0; j < inputArr[i].length; j++){
                if((inputArr[i][j] * inputArr[i+1][j] * inputArr[i+2][j]) == product){
                    count++;
                }            
            }
        }
        return(count)
    }
    verticalCount()

    var diagonalRCount = ()=>{
        // var count = 0;
        for(var i = 0; i < inputArr.length-2; i++){
            for(var j = 0; j < inputArr[i].length; j++){
                if((inputArr[i][j] * inputArr[i+1][j+1] * inputArr[i+2][j+2]) == product){
                    count++;
                }     
            }
        }
        return(count)
    }
    diagonalRCount()
    
    var diagonalLCount = ()=>{
        // var count = 0
        for(var i = 0; i < inputArr.length-2; i++){
            for(var j = inputArr[i].length-1; j >= 0; j--){
                if((inputArr[i][j] * inputArr[i+1][j-1] * inputArr[i+2][j-2]) == product){
                    count++;
                }     
            }
        }
        return(count)
    }
    console.log(diagonalLCount());

    // var total = horizontalCount() + verticalCount() + diagonalRCount() + diagonalLCount();
    // console.log(total)
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`4 4 16
    1 2 1 8
    2 2 8 6
    8 1 2 5
    2 5 8 6`);
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