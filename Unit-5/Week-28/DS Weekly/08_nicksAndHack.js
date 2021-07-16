function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let T = +input[0].trim();

    let K = 1;

    for(let i = 1; i <= T; i++){
        let N = +input[i].trim();

        let H = hack(N, K);
        
        if(H){
            console.log('Yes');
        }
        else {
            console.log('No');
        }
    }
};

function hack (N, K) {
    if(N === K){
        return true;
    }
    if(K > N){
        return false;
    }
    return hack(N, K*10) || hack(N, K*20);
};

if (process.env.USER === "kartik") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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