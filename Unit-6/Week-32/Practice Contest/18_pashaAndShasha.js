function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let str1 = input[line++].trim().split('').sort().join('');
        let str2 = input[line++].trim().split('').sort().join('');

        if(str1 == str2){
            console.log('True');
        }
        else {
            console.log('False');
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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