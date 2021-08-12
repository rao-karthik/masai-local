function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').join('');

    generatePermutation(arr, 0, N-1);
}

function generatePermutation(str, left, right){
    if(left == right){
        console.log(str.split('').join(' '));
        return;
    }

    for(let i = left; i <= right; i++){
        str = swap(str, left, i);
        generatePermutation(str, left+1, right);
        // str = swap(str, left, i);
    }
}

function swap(str, i, j){
    str = str.split('');

    [str[i], str[j]] = [str[j], str[i]];

    return str.join('');
}

if (process.env.USER === "kartik") {
    runProgram(`3
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