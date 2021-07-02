function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    input = input[1].trim().split(" ").map(Number);
    // console.log(input);

    let i = 0;
    let flag = false;

    while (i < input.length){
        if(input[i] == 42){
            flag = true;
            break;
        }
        i++;
    }
    if (flag == true){
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`5
    3 7 0 9 8`);
} else {
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