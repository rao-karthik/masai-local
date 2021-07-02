function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 

    let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let min;

    for(let i = 0; i < N-1; i++){
        min = i;
        for(let j = i+1; j < N; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    console.log(arr.join(' '));
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
}