function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 0;

    for(let i = 0; i < tests; i++){
        let [rows, cols] = input[++line].trim().split(" ").map(Number);
        // console.log(rows, cols)

        let arr = [];
        for(let j = 0; j < rows; j++){
            arr.push(input[++line].trim().split(" "));
        }
        // console.log(arr);

        spiralTraverse(arr, cols, rows)
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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

function spiralTraverse(arrr, cols, rows){
    let [left, right, top, bottom] = [0, cols-1, 0, rows-1]

    let newArr = [];

    while(left<=right && top<=bottom){
        for(let k=top; k<=bottom; k++){
            newArr.push(arrr[k][left]);
        }
        left++
        for(let k=left; k<=right; k++){
            newArr.push(arrr[bottom][k]);
        }
        bottom--
        for(let k=bottom; k>=top; k--){
            newArr.push(arrr[k][right]);
        }
        right--
        for(let k=right; k>=left; k--){
            newArr.push(arrr[top][k]);
        }
        top++
    }

    let len = rows * cols
    let ad = newArr.slice(0, len)
    console.log(ad.join(" "));
}