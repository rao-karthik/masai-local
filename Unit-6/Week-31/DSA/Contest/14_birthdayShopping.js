function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    let [N, K] = input[0].trim().split(' ').map(Number);

    if(K === 1){
        for(let i = 1; i <= N; i++){
            console.log(i);
        }
    }
    else {
        for(let i = 1; i < N; i++){
            for(let j = i+1; j <= N; j++){
                console.log(i, j)
            }
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3 1`);
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