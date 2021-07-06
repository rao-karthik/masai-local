function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    let str = input[0];
    let N = +input[1];
    let len = str.length;

    let newStr = "";
    for(let i = 0; i < len; i++){
        if(str[i] >= '0' && str[i] <= '9'){
            let code = +str[i] + N;
            if(code > 9){
                code = code % 10;
            }
            newStr += code;
        }
        else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            if(N % 26 === 0){
                newStr += str[i];
            }
            else {
                let code = str.charCodeAt(i) + N;
                if(code > 90){
                    code = code % 90;
                    code = code % 26 + 64;
                }
                newStr += String.fromCharCode(code);
            }
        }
        else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
            if(N % 26 === 0){
                newStr += str[i];
            }
            else {
                let code = str.charCodeAt(i) + N;
                if(code > 122){
                    code = code % 122;
                    code = code % 26 + 96;
                }
                newStr += String.fromCharCode(code);
            }
        }
        else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

if (process.env.USERNAME === "kartik") {
    runProgram(`AaZz190./Usa
    26`);
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