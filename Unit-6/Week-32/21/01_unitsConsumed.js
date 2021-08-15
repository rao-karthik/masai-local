function runProgram(input){
    input = +input.trim();

    let unitsPrice = input - 80;

    let units = 0;

    if(unitsPrice <= 150){
        units = parseInt(unitsPrice / 3);
    }
    else if (unitsPrice > 150 && unitsPrice <= 650){
        units = 50 + parseInt((unitsPrice-150)/5);
    }
    else {
        units = 150 + parseInt((unitsPrice-650)/10);
    }
    console.log(units)
}

if (process.env.USER === "kartik") {
    runProgram(`930`);
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
        runProgram(read);
        process.exit(0);
    });
}