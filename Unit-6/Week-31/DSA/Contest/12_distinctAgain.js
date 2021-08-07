function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    let d = findDistinct(arr, N);

    let i = 0;
    let j = d.length-1;

    let sum = 0;
    while(i <= j){
        if(i === j){
            sum += +d[i];
        }
        else {
            sum += +d[i] + +d[j];
        }
        i++;
        j--;
    }

    console.log(sum)
}

function findDistinct (arr, len){
    let obj = {}
    for(let i = 0; i < len; i++){
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
    2 2 2 1 1`);
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