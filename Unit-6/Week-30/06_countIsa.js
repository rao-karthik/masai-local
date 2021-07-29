function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0]
    let line = 1

    for(let m = 1; m <= tests; m++){
        let [row, col] = input[line++].trim().split(" ").map(Number)
        let arr = [];
        
        for(let i=0; i<row; i++){
            arr.push(input[line++].trim().split(""))
        }

        let count = 0;

        for(let i = 0; i < row; i++){
            for(let j = 0;j< col; j++){
                if(j < col-2){
                    if(arr[i][j] == "i" && arr[i][j+1] == "s" && arr[i][j+2]== "a"){
                        count++
                    }
                }
                if(i < row-2){
                    if(arr[i][j] == "i" && arr[i+1][j] == "s" && arr[i+2][j] == "a"){
                        count++
                    }
                }
            }
        }
        console.log(count)
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
    3 3
    isa
    sia
    ais
    5 3
    isa
    sia
    ais
    ssa
    aai`);
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