function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    
    let [left, right, k] = input[0].trim().split(" ").map(Number);
    // console.log(left, right, k)

    let count = 0;
    for (let i = left; i <= right; i++){
        if (i % k == 0){
            ++count
        }
    }
    
    // while (left <= right){
    //     if(left % k == 0){
    //         count++
    //     }
    //     left++;
    // }
    
    console.log(count);
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`5 172 21`);
} else {
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