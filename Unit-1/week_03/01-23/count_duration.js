function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input)
    var price = input[0].trim().split(" ");
    // console.log(price)
    var ticket = input[1].trim().split(" ")
    // console.log(ticket)
    var total = 0;
    // total = (price[0]*ticket[0]) + (price[1]*ticket[1]) + (price[2]*ticket[2]);
    // console.log(total)
    for (var i = 0; i < price.length; i++){
        total = total + price[i] * ticket[i]
    }
    console.log(total)
}

if (process.env.USER === "rao") {
    runProgram(`1200 1400 2000
    5 6 2`);
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