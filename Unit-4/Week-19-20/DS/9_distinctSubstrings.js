function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0];
    // console.log(tests)

    let line = 1;

    for(let i = 0; i < tests; i++){
        let n = +input[line++].trim();

        let str = input[line++].trim();

        let j = 0;
        let k = 0;
        let obj = {};
        let max = 0;
        while(k < n){
            obj[str[j]] = 1;
            if(obj[str[k]]){
                max = Math.max(max, k-j-1);
                k++;
            }
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`2
    5
    abcde
    3
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

function unique(str){
    let obj = {};

    for(let i = 0; i < str.length; i++){
        let a = str[i];
        if(obj[a]){
            obj[a]++;
        }
        else{
            obj[a] = 1;
        }
        if(obj[a] > 1){
            return false;
        }
    }
    return true;
}