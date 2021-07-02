function runProgram(input){
    input = input.trim();
    console.log(input);

    let dist = [ 0, 0]

    for(let i = 0; i < input.length; i++){
        if(input[i] === "L"){
            dist[0] += -1;
        }
        else if(input[i] === "R"){
            dist[0] += 1;
        }
        else if(input[i] === "U"){
            dist[1] += 1;
        }
        else if(input[i] === "D"){
            dist[1] += -1;
        }
    }

    console.log(`${dist[0]} ${dist[1]}`)
}

if (process.env.USER === "kartik") {
    runProgram(`LLRDDR
    abc`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`LLRDDR`);
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