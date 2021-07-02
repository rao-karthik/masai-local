function runProgram(input){
    var input = input.trim().split(/[\r\n]+/);
    console.log(input);
    var input = input[0].trim().split(" ").map(Number);
    console.log(input);
    var n = input[0];
    var y = input[2];
    var mult = [];
    for (var i = 1; i <= input[1]; i++){
        mul = n * i;
        mult.push(mul);
        // console.log(mult)
        var sum = 0;
        
        for (j = 0; j < mult.length; j++){
            if (mult[j] % y == 0){
                sum = sum + mult[j]
            }
        }
    }
    console.log(sum)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});