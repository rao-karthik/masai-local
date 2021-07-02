function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    console.log(input)

    let test = Number(input[0])
    let line = 1
    for(let i=0; i<test; i++){
        let [row, col] = input[line++].trim().split(" ").map(Number)
        let arr = []
        for(let j=0; j<row; j++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        pattern(arr, 0, col-1, 0, row-1, [])
    }
}
function pattern(arr,left, right, top, bottom, ans){
    while(left<=right && right<=bottom){
        for(let k=top; k<=bottom; k++){
            ans.push(arr[k][left])
        }
        left++
        for(let k=left; k<=right; k++){
            ans.push(arr[bottom][k])
        }
        bottom--
        for(let k=bottom; k>=top; k--){
            ans.push(arr[k][right])
        }
        right--
        for(let k=right; k>=left; k--){
            ans.push(arr[top][k])
        }
        top++
    }
    console.log(ans)
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