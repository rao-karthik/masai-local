function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    console.log(input)

    let len = +input[0];

    let [L, R] = input[0].trim().split(' ');

    let arr = [];
    for(let i = 0; i < len; i++){
        arr.push(i + 1);
    }
    console.log(arr)

    let perArr = []

    generatePermutation(arr.join(''), 0, len-1, perArr);

    console.log(perArr)

    // for(let i = 0)

}

if (process.env.USER === "kartik") {
    runProgram(`3
    0 1`);
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

function generatePermutation (str, left, right, arr){
    if(left === right){
        arr.push(str.split(''));
        return;
    }
    for (let i = left; i <= right; i++){
            str = swap(str, left ,i);
            generatePermutation(str, left+1, right, arr);
        }
}

function swap(str, i, j){

    str = str.split('');

    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;

    return str.join('');
}