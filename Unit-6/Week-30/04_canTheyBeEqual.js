function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let t = +input[0];
    let line = 1;

    for(let i = 1; i <= t; i++){
        let n = +input[line++].trim();

        let A = input[line++].trim().split("");

        let B = input[line++].trim().split("");

        A.sort();

        B.sort();

        if(A.join("") === B.join("")){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
    2
    ab
    ac
    3
    aba
    aab`);
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