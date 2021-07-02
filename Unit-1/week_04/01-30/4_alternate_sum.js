function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var nums = input = input[1].trim().split(" ").map(Number);
    // console.log(nums);
    var sum = 0;
    for (var i = 0; i < nums.length; i+=2){
        // console.log(i)
        sum = sum + nums[i]
    }
    console.log(sum)
}

if (process.env.USER === "rao") {
    runProgram(`7
    4 5 5 5 6 6 7`);
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