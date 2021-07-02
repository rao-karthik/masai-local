function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    score = input[0].trim().split(" ");
    // console.log(input)
    // console.log(score)
    if (score[0] > score[1]){
        console.log("Australia");
    }
    else if (score[0] < score[1]){
        console.log("England");
    }
    else if (score[0] ==score[1]){
        console.log("Tie")
    }
}

if (process.env.USER === "rao") {
    runProgram(`54 46`);
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
