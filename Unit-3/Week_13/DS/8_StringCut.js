function runProgram(input){
    input = input.trim();
    // console.log(input);

    let str1 = ''
    for (let i = Math.floor(input.length/2)-1; i >= 0 ; i--){
        str1 += input[i];
    }
    
    let str2 = '';
    for (let i = input.length-1; i >= Math.ceil(input.length/2); i--){
        str2 += input[i];
    }
    if (input.length % 2 === 0){
        console.log(`${str1}${str2}`)
    }
    else {
        console.log(`${str1}${input[Math.floor(input.length/2)]}${str2}`)
    }
}

if (process.env.USER === "kartik") {
    runProgram(`abcxyz`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`abcxyz`);
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