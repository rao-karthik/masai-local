function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);
    arr = arr.sort((a, b)=> a-b);

    let newArr = checkDuplicates(arr, N);
    console.log(newArr.join(' '));
}

function checkDuplicates (arr, N) {
    let obj = {};

    for(let i = 0; i < N; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    return Object.keys(obj);
}

if (process.env.USER === "kartik") {
    runProgram(`5
    2 2 2 7 9`);
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