function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];
    let arr = input[1].trim().split(' ').map(Number).join('');
    
    generatePermutations(arr, 0, N-1);
}

function generatePermutations (arr, left, right){
    if(left === right){
        console.log(arr.split('').join(' '));
        return;
    }
    
    for(let i = left; i <= right; i++){
        arr = swap(arr, left, i);
        generatePermutations(arr, left+1, right);
    }
}

function swap (arr, i, j){

    arr = arr.split('');

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr.join('');
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