function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = input[0];
    let line = 1;

    for(var i=0; i<tests; i++){
        var n = Number(input[line])
        line++
        var arr = input[line].trim().split("")
        line++
        var letter = input[line].trim().split(" ")
        line++
        var count = 0
        arr = arr.join("")
        for(var j  =0; j<arr.length; j++){
            var str = ""
            for(var k=j; k<arr.length; k++){
                str = str + arr[k]
                if(str[str.length-1] == letter){
                    count++
                }
            }
        }
        console.log(count)
    }
}

if (process.env.USER === "kartik") {
    runProgram(``);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`1
    4
    aman
    a`);
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