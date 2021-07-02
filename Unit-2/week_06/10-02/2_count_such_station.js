function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    console.log(input);
    var sum = input[0].trim().split(" ").map(Number);
    console.log(sum);
    var nums = input[1].trim().split(" ").map(Number);
    console.log(nums);
    var count = 0;

    for (var i = 0; i < nums.length; i++){
        for (var j = i + 1; j < nums.length; j++){
            if ((nums[i] + nums[j]) == sum[1]){
                count++;
            }
        }
    }
    console.log(count);
}

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