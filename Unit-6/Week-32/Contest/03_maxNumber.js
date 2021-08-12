function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    console.log(input)

    let tests = +input[0];

    for(let i = 1; i <= tests; i++){
        let str = input[i].trim().split('');

        let res = [];

        subSequence("", str, 0, str.length-1, res);

        console.log(res)
    }
}

function subSequence (ans, arr, low, high, res) {
    if(low <= high+1 && ans !== ""){
        console.log(ans);
    }
    for(let i = low; i <= high; i++){
        subSequence(ans + arr[i], arr, i+1, high, res);
    }
}



if (process.env.USER === "kartik") {
    runProgram(`2
    1230
    11230`);
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