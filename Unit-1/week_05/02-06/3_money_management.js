function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var exp = input[1].trim().split(" ").map(Number);
    // console.log(exp);
    var toatl_sal = Number(input[2]);
    // console.log(toatl_sal);
    var total_exp = 0;
    for (var i = 0; i < exp.length; i++){
        total_exp += exp[i];
    }
    // console.log(total_exp);

    if (total_exp > toatl_sal){
        console.log("Debt");
    }
    else if (total_exp < toatl_sal){
        console.log("Save");
    }
    else {
        console.log("Neutral")
    }
}
if (process.env.USER === "rao") {
    runProgram(`5
    1 2 3 4 5
    15`);
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