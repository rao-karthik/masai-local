function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ').map(Number);

        let count = countChars(arr, N);

        let flag = true;

        let values = Object.values(count);
        
        for(let i = 0; i < values.length; i++){
            if(values[i] > 1){
                flag = false;
                break;
            }
        }

        if (flag){
            console.log('NO');
        }
        else {
            console.log('YES');
        }
    }
}

function countChars (arr, N){
    let obj = {};

    for(let i = 0; i < N; i++){
        if(obj[arr[i]]){
            obj[arr[i]] ++;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}

if (process.env.USER === "kartik") {
    runProgram(`3
    1
    1
    2
    1 1
    3
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