function runProgram(input){

    var data = input.trim().split(/[\r\n]+/);
    data[0] = data[0].trim().split(".");
    var x = 32 / Number(data[0][0]);
    x = Math.floor(x)
    if (x < 1){
        console.log("Too Low")
    }
    else if (Number(data[0][0]) == 0){
        console.log("-1")
    }
    else{
        console.log(x)
    }
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