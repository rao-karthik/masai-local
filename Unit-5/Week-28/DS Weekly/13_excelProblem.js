function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let str = input[line++].trim();

        let colNum = findColNum(str, str.length, 0, 0);
        console.log(colNum)
    }
}

function findColNum (str, len, n, sum){
    if(n === len){
        return sum;
    }
    let A = 'A';
    sum = sum * 26 + str.charCodeAt(n) - A.charCodeAt(0) + 1;
    return  findColNum(str, len , n+1, sum)
}

if (process.env.USER === "kartik") {
    runProgram(`3
    A
    AB
    ZY`);
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