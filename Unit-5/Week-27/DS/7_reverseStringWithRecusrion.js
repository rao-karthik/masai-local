function runProgram(input){
    input = input.trim();
    input = input.split('');

    console.log(reverseString(input))
}

if (process.env.USERNAME === "kartik") {
    runProgram(`Masai school`);
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

function reverseString(str){
    if (str.length === 0){
        return str;
    }
    else {
        return str[str.length-1] + reverseString(str.splice(0, str.length-1));
    }
}