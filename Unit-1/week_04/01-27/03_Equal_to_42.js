function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var integers = input[1].trim().split(" ").map(Number);
    // console.log(integers);
    var flag = false;
    for (var i = 0; i < integers.length; i++){
        if (integers[i] == 42){
            flag = true;
            break;
        }
        else {
            flag = false;
        }
    }
    if (flag == true){
        console.log("Yes")
    }
    else if (flag == false){
        console.log("No")
    }
}

if (process.env.USER === "rao") {
    runProgram(`5
    3 7 0 9 8 42`);
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