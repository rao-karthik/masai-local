function runProgram(input){
    var bill = input.trim().split(/[\r\n]+/).map(Number);
    console.log(bill)
    if(bill <= 230){
        var unitsConsumed = (bill-80)/3;
    } else
    if (bill > 230 && bill <= 730){
        unitsConsumed = (150/3) + ((bill-150-80)/5);
    } else
    if(bill > 730){
        unitsConsumed = (150/3) + (500/5) + ((bill-650-80)/10);
    }
    console.log(unitsConsumed);
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