function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ');

    quickSort(arr, 0, N-1);

    console.log(arr.join(' '));
}

function quickSort (arr, low, high){
    if(low < high){
        let p = partition(arr, low, high);

        quickSort(arr, low, p-1);
        quickSort(arr, p+1, high);
    }
}

function partition (arr, l, r){
    let pivot = arr[r];

    let i = l;

    for(let j = l; j < r; j++){
        if(arr[j] > pivot){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[r]] = [arr[r], arr[i]];
    return i;
}

if (process.env.USER === "kartik") {
    runProgram(`5
    2 3 1 4 5`);
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