function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let n = Number(input[line++].trim());
        console.log(n)
        let arr = input[line++].trim().split(" ");
        console.log(arr)
        let flag = true;
        let l = 0;
        let r = n-1;
        for(let i = 0; i < n; i++){
            if
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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

function uniqueChar(arr){
    let obj = {};
    let flag = true;
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }
        else {
            obj[arr[i]] = 1
        }
        if(obj[arr[i]] > 1){
            flag = false;
            break;
        }
    }
    return flag;
}