function runProgram(input){
    input = +input.trim();

    console.log(countSteps(input, 0));
}

function countSteps (dist, count){
    while (dist != 0){
        if(dist >= 5){
            count += parseInt(dist/5);
            dist = dist % 5;
        }
        if(dist == 4 || dist == 3 || dist == 2 || dist == 1) {
            count += 1;
            dist = 0;
        }
    }

    return count;
}

if (process.env.USER === "kartik") {
    runProgram(`512069`);
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