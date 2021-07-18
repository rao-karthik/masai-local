function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    let N = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    quickSort(arr, 0, N-1);
    console.log(arr.join(' '));
}

function quickSort(arr, lo, hi){
    if(lo < hi){
        let p = partition(arr, lo, hi);
        quickSort(arr, lo, p-1);
        quickSort(arr, p+1, hi);
    }
}

function partition(arr, lo, hi){
    let pivot = arr[hi];

    let i = lo;

    for(let j = lo; j  < hi; j++){
        if(arr[j] < pivot){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[hi]] = [arr[hi], arr[i]];
    return i;
}

if (process.env.USER === "kartik") {
    runProgram(`5
    3 5 0 9 8`);
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