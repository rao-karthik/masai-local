function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    let [n, k] = input[0].trim().split(' ').map(Number);

    let ans = solve(n.toString());

    ans = ans * k;

    console.log(solve(ans.toString()));
}

function solve(a){
    if(a.length == 0) return 0;

    else if (a.length == 1) return +a; 

    let temp = 0;
    
    for(i = 0; i < a.length; i++) {
        temp = temp + +a.charAt(i);
    }

    return solve(temp.toString());
}

if (process.env.USER === "kartik") {
    runProgram(`148 3`);
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