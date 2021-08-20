function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];

    for(let i = 1; i <= tests; i++){
        let num = +input[i];

        console.log(findRoot(num));
    }
}

function findRoot (num){
    if(num === 0 && num === 1){
        return num;
    }

    let l = 1;
    let r = num;

    let res = 0;

    while(l <= r){
        let m = parseInt((l + r)/2);

        if(m * m <= num){
            l = m + 1;
            res = m;
        }
        else {
            r = m - 1;
        }
    }
    return res;
}

if (process.env.USER === "kartik") {
    runProgram(`2
    4
    8`);
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