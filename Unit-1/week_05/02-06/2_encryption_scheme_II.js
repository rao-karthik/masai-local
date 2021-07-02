function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var N = Number(input[0]);
    // console.log(N);
    var num = input[1].trim().split(" ").map(Number);
    // console.log(num);
    var sum = 0;
    for (var i = 0; i < num.length; i++){
        if (num[i] === 0){
            sum += i+1;
        }
        console.log(sum);
    }
    // var num_arr = []
    // var nums = []
    // for (var i = 1; i <= N; i++){
    //     num_arr.push(i)
    // }
    // // console.log(num_arr)
    // for (var j = 0; j < N; j++){
    //     if (num[j] == 0){
    //         num[j] = 1;
    //     }
    //     else if (num[j] == 1){
    //         num[j] = 0
    //     }
    // }
    // for (var i = 0; i < N; i++){
    //     sum += num[i]*num_arr[i];
    // }
    // console.log(sum);
}
if (process.env.USERNAME === "rao") {
    runProgram(`5
    1 0 0 1 1`);
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