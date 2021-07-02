function runProgram(input){
    input = input.trim().split(/[\r\n]+/).map(Number);
    // console.log(input);
    var step = Math.floor(input/5)
    // console.log(step);
    var remDist = input % 5;
    // console.log(remDist);
    var count = 0;
    if (remDist > 0 && remDist <=5){
        count = 1;
    }
    var totalDist = step + count;
    console.log(totalDist);
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


// var step = Math.floor(input/5)
//     var remDist = input % 5;
//     if( remDist === 0 ){
//         console.log(step)
//     }
//     else{
//         console.log(step + 1)    
//     }