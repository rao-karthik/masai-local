function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0];
    let line = 1;

    for (let i = 0; i < tests; i++){
        let [row, col] = input[line++].trim().split(" ");
        // console.log(row, col)

        let mat = [];
        for(let j = 0; j < row; j++){
            mat.push(input[line++].trim().split(" "));
        }
        // console.log(mat);
        let obj = {}
        for(let j = 0; j < row; j++){
            for(let k = 0; k < col; k++){
                if (mat[j][k] === " "){
                    continue;
                }
                else if(obj[mat[j][k]]){
                    obj[mat[j][k]]++;
                }
                else {
                    obj[mat[j][k]] = 1;
                }
            }
        }
        console.log(obj)
        let value = Object.values(obj)
        let key = Object.keys(obj)

        let min = 0;
        for(let j = 1; j < value.length; j++){
            if (value[min] < value[i]){
                min = i;
            }
        }
        console.log(key[min])
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
    3 3
    1 2 1
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
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