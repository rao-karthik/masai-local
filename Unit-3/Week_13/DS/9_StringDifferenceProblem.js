function runProgram(input){
    let [str1, str2] = input.trim().split(/[\r\n]+/);
    str2 = str2.trim();
    // console.log(str1, str2)

    if(str2 === null){
        console.log(str1);
    }
    else {
        let str = "";
        for(let i = 0; i < str1.length; i++){
                if(str1[i] !== str2[i]){
                    str += str1[i]
                }
            }
            console.log(str);
        }
}

if (process.env.USER === "kartik") {
    runProgram(`TESTCASE
    TESOCASE`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`ABCX
    ABCD`);
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