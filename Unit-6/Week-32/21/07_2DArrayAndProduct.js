function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    console.log(input)

    let [R, C, P] = input[0].trim().split(' ').map(Number);
    
    let arr = [];
    for(let i = 1; i <= R; i++){
        arr.push(input[i].trim().split(' ').map(Number));
    }
    console.log(arr);

    for(let i = 0; i < R; i++){
        for(let j = 0; j < C-2; j++){
            
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3 3 6
    3 2 1
    2 2 2
    1 5 1`);
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