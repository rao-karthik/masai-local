function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[0];
    // console.log(input);

    // let char = "abcdefghijklmnopqrstuvwxyz"

    let sum = 0;

    // for(let i = 0; i < input.length; i++){
    //     for(let j = 0; j < char.length; j++){
    //         if(input[i] == char[j]){
    //             sum += j+1;
    //         }
    //     }
    // }
    // console.log(sum);

    for (let i = 0; i < input.length; i++){
        if(input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123){
            sum += input.charCodeAt(i) % 96;
        }
        else if(input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91){
            sum += input.charCodeAt(i) % 64;
        }
    }
    console.log(sum)
}

if (process.env.USER === "kartik") {
    runProgram(`aBCa`);
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