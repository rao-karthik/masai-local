function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    var [row, col, sum] = input[0].trim().split(" ").map(Number);
    console.log(sum);

    var mat = [];
    for(var i =1; i <= row; i++){
        let arr = input[i].trim().split(" ").map(Number);
        mat.push(arr);
    }
    console.log(mat)
    var count = 0;
    for(let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if (j < col-2){
                if(mat[i][j] + mat[i][j+1] + mat[i][j+2] == sum){
                    count++
                }
            }

            if (i < row-2){
                if(mat[i][j] + mat[i+1][j] + mat[i+2][j] == sum){
                    count++
                }
            }
            if(i < row-2 && j < col-2){
                if(mat[i][j] + mat[i+1][j+1] + mat[i+2][j+2] == sum){
                    count++;
                }
            }
            if(i > 1 && j < col-2){
                if(mat[i][j] + mat[i-1][j+1] + mat[i-2][j+2] == sum)
                count++
            }
        }
    }
    console.log(count);
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`3 3 6
    3 2 1
    2 2 2
    1 5 1`);
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