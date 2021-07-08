function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);

    console.log(bubbleSort(arr, N).join(' '));

}

if (process.env.USERNAME === "kartik") {
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
};

function bubbleSort(arr, n) {
    if (n === 1){
        return arr
    }
    else {
        for(let i = 0; i < n; i++){
            if(arr[i] > arr[i+1]){
                // let temp = arr[i];
                // arr[i] = arr[i+1];
                // arr[i+1] = temp;

                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            };
        };
        return bubbleSort(arr, n-1);
    }
}