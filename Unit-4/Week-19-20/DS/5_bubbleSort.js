function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let len = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let sortCount = 0;

    for(let i = 0; i < len-1; i++){
        for(let j = 0; j < len -i-1; j++){
            if(arr[j] < arr[j+1]){
                continue;
            }
            else {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                sortCount++;
            }
        }
        if(sortCount < 1){
            break;
        }
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