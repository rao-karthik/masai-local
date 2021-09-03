function runProgram(input){
    let n = +input;

    pascalTriangle(n);
}

function pascalTriangle(n){
    let str = "";
    for(let i = 0; i < n; i++){
        let temp = "1";
        if(str.length === 0){
            str = "1";
            let sp = spaces(n, str.split(' ').length);
            console.log(sp + str);
        }
        else if (str.length === 1){
            str = "1 1";
            let sp = spaces(n, str.split(' ').length);
            console.log(sp + str);
        }
        else {
            let j = 0;
            str = str.split(' ')
            while(j+1 < str.length){
                let sum = +str[j] + +str[j+1];
                temp += " " + sum;
                j++;
            }
            str = temp + " " + 1;
            let sp = spaces(n, str.split(' ').length);
            console.log(sp + str);
        }
    }
}

function spaces (n, len){
    if(n === len){
        return "";
    }

    let sp = n - len;
    let spStr = "";

    for(let i = 0; i < sp; i++){
        spStr += " ";
    }

    return spStr;
}

if (process.env.USER === "kartik") {
    runProgram(`3`);
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