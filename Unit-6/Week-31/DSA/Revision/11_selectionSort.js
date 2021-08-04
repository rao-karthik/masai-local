function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);

    sort(arr, N);
    console.log(arr.join(' '));
}

function sort (arr, N) {
    for (let i = 0; i < N; i++){
        let min = 0;
        for(let j = 0; j < N; j++){
            if(arr[j] > arr[min]){
                min = j;
            }
            [arr[j], arr[min]] = [arr[min], arr[j]];
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`6
    12 23 -45 45 0 76`);
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