function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let [N, K] = input[0].trim().split(' ').map(Number);
    // console.log(N, K)

    let arr = input[1].trim().split(' ').join('');

    let count = 0;
    checkSum(arr, "", count, K);

    console.log(count)
}

function generateSubSequence(str, res, count, K){
    if(str.length == 0) {
        console.log(str)
            console.log(checkSum(str))
            if(checkSum(str) == K){
                count++;
            }
        return
    }
    generateSubSequence(str.substring(1),res, count, K);
    generateSubSequence(str.substring(1),res+str.charAt(0), count, K);
}

function checkSum(arr){
    console.log(arr)
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += +arr[i];
    }

    console.log(sum)
    return sum;
}

if (process.env.USER === "kartik") {
    runProgram(`4 10
    1 2 3 4`);
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