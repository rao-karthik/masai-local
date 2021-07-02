function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var [row, col] = input[0].trim().split(" ");
    // console.log(row, col);

    var count = 0;
    var word = "saba"
    for(var i = 1; i <= row; i++){
        // console.log(input[i])
        for(j = 0; j < input[i].length; j++){
            // console.log(input[i][j])
            if(j < col-2){
                if(input[i][j] + input[i][j+1] + input[i][j+2] + input[i][j+3] == word){
                    count++
                }
            }

            if(i < row-2){
                if(input[i][j] + input[i+1][j] + input[i+2][j] + input[i+3][j] == word){
                    count++
                }
            }

            if(i < row-2 && j < col-2){
                if(input[i][j] + input[i+1][j+1] + input[i+2][j+2] + input[i+3][j+3] == word){
                    count++
                }
            }

            if(i > 2 && j < col-2){
                if(input[i][j] + input[i-1][j+1] + input[i-2][j+2] + input[i-3][j+3] == word){
                    count++
                }
            }
        }
    }
    console.log(count);
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`5 5
safer
amjad
babol
aaron
songs`);
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