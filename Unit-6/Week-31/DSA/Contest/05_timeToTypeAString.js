function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    let keyboard = input[0].trim().split("")

    let word = input[1].trim().split("")

    let count = 0
    console.log(checkSpeed(keyboard, word, count, 0, 0))
}

function checkSpeed(keyboard, word, count, n, pointer){

    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < keyboard.length; j++){
            if(word[i] == keyboard[j]){
                pointer = j
                count = count+ Math.abs(n-pointer)
                n = pointer
            }
        }
    }
    return count
}

if (process.env.USER === "kartik") {
    runProgram(`pqrstuvwxyzabcdefghijklmno
    hello`);
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