function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);

    sort(arr, 0, N-1);
    console.log(arr.join(' '));
}

function sort(arr, l, r){
    if(l < r){
        let p = partition(arr, l, r);

        sort(arr, l, p-1);
        sort(arr, p+1, r);
    }
}

function partition (arr, l, r){
    let pivot = arr[r];

    let i = l;

    for(let j = l; j < r; j++){
        if(arr[j] < pivot){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[r]] = [arr[r], arr[i]];
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