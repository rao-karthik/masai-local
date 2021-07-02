function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    inputArr= []
    for (var i = 0; i < input.length; i++){
        inputstr = input[i].trim().split(" ");
        inputArr.push(inputstr)
    }
    // console.log(inputArr)

    for(var i = 0; i < inputArr.length; i++){
        for(var j = 0; j < inputArr[i].length; j++){
            if(inputArr[i][j]== 'x' &&  inputArr[i][j+1]== 'x' && inputArr[i][j+2]== 'x'){
                console.log('x');
            }
            else if(inputArr[i][j]== 'o' &&  inputArr[i][j+1]== 'o' && inputArr[i][j+2]== 'o'){
                console.log('o');
            }           
        }
    }

    for(var i = 0; i < inputArr.length-2; i++){
        for(var j = 0; j < inputArr[i].length; j++){
            if(inputArr[i][j]== 'x' && inputArr[i+1][j]== 'x' && inputArr[i+2][j]== 'x'){
                console.log('x');
            }
            else if(inputArr[i][j]== 'o' && inputArr[i+1][j]== 'o' && inputArr[i+2][j]== 'o'){
                console.log('o');
            }            
        }
    }

    for(var i = 0; i < inputArr.length-2; i++){
        for(var j = 0; j < inputArr[i].length; j++){
            if(inputArr[i][j]== 'x' && inputArr[i+1][j+1]== 'x' && inputArr[i+2][j+2]== 'x'){
                console.log('x');
            }   
            else if(inputArr[i][j]== 'o' && inputArr[i+1][j+1]== 'o' && inputArr[i+2][j+2]== 'o'){
                console.log('o');
            }  
        }
    }

    for(var i = 0; i < inputArr.length-2; i++){
        var str = ""
        for(var j = inputArr[i].length-1; j >= 2; j--){
            if(inputArr[i][j]== 'x' && inputArr[i+1][j-1]== 'x' && inputArr[i+2][j-2]== 'x'){
                console.log('x');
            }
            else if(inputArr[i][j]== 'o' && inputArr[i+1][j-1]== 'o' && inputArr[i+2][j-2]== 'o'){
                console.log('o');
            }
        }
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`x o x
    o x x
    x x o`);
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