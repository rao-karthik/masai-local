function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    input = input[1].trim().split(" ").map(Number);
    console.log(input);

    let str = ""

    for(let i = 0; i < input.length; i++){
        if(Math.sign(input[i]) == -1 || input[i] == 0){
            str += 0;
        }
        else if (input[i] == " "){
            continue;
        }
        else {
            str += input[i];
        }
    }
    console.log(str)

}

if (process.env.USER === "kartik") {
    runProgram(`8
1 2 3 4 5 6 7 0`);
} else {
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