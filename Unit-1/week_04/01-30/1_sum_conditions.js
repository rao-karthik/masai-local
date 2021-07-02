function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var nums = input = input[1].trim().split(" ").map(Number);
    // console.log(nums);
    var sum = 0;
    for (var i = 0; i < nums.length; i++){
        sum = sum + nums[i]
    }
    // console.log(sum)
    if (sum > 100){
        console.log("Greater");
    }
    else {
        console.log("Lesser")
    }
}

if (process.env.USER === "rao") {
    runProgram(`5
    21 24 2 54 8`);
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