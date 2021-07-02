function runProgram(input){

    var score = input.trim().split(" ");
    total_score = Number(score[0])*1 + Number(score[1])*2 + Number(score[2])*3 + Number(score[3])*4 + Number(score[4])*6
    console.log(total_score)
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