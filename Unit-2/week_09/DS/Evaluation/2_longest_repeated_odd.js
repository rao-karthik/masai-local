/*
function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    // var len = input[0];
    var subInput = []
    for(var i = 1; i < input.length; i++){
        subInput.push(input[1].trim().split(" ").map(Number))
    }
    console.log(subInput)

    // input = input[1].trim().split(" ").map(Number);
    // console.log(input)
    count = 0;
    var arr = []
    var countarr = []
    for(var j = 0; j < subInput.length; j++){
        for(var i = 0; i < subInput[j].length; i++){
            if(subInput[j][i] % 2 != 0){
                count++;
            }
            if(subInput[j][i] % 2 == 0){
                count = 0;
                continue;
            }
            countarr.push(count)
        }
        arr.push(countarr)
    }
    console.log(arr);
    
    // let max  = 0;
    // for(var i = 1; i < arr.length; i++){
    //     if(arr[max] < arr[i]){
    //         max = i;
    //     }
    // }
    // console.log(arr[max])
}
*/

function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var len = input[0];
    // console.log(len)
    input = input[1].trim().split(" ").map(Number);
    // console.log(input)
    count = 0;
    var arr = []
    for(var i = 0; i < len; i++){
        if(input[i] % 2 != 0){
            count++;
        }
        if(i > 1 && input[i-1] != input[i] && input[i] % 2 != 0){
            count = 1;
        }
        arr.push(count)
    }
    console.log(arr);
    
    let max  = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[max] < arr[i]){
            max = i;
        }
    }
    if(arr[max] == undefined){
        arr[max] = 0;
    }

    console.log(arr[max])
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`5
    4 2 6 8 10`);
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