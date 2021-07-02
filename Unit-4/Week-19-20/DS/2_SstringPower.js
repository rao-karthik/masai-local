function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let string = input[line++].trim();

        let count = 1;
        // let countArr = [];
        let res = 0;
        for(let i = 0; i < string.length-1; i++){
            if(string[i] === string[i+1]){
                count++;
            }
            else {
                if( res < count){
                    res = count;
                }
                count = 1;
            }
            // countArr.push(count);
        }
        // let max = Math.max(...countArr);
        // console.log(max);
        console.log(res);
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`4
    aaaaaa
    aaabbb
    asd
    aabbcc`);
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