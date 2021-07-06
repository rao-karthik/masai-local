function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    let str = input[0];
    let N = +input[1];
    let len = str.length;

    let newStr = "";
    for(let i = 0; i < len; i++){
        if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <=57){
            let code = str.charCodeAt(i) + N;
            if(code > 57){
                code = code - 57 + 47;
            }
            let s = String.fromCharCode(code);
            newStr += s;
        }
        else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            let code = str.charCodeAt(i) + N;
            if(code > 90){
                code = code - 90 + 64;
            }
            let s = String.fromCharCode(code);
            newStr += s;
        }
        else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
            let code = str.charCodeAt(i) + N;
            if(code > 122){
                code = code - 122 + 97;
            }
            let s = String.fromCharCode(code);
            newStr += s;
        }
        else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

if (process.env.USERNAME === "kartik") {
    runProgram(`----------a
    1009`);
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