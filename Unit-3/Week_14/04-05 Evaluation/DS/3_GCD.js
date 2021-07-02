function runProgram(input){
    input = input.trim().split(/(\r\n)+/); 
    input = input[0].trim().split(" ").map(Number);
    // console.log(first, sec);

    let min = Math.min(...input)

    let max = 0;
    // if (first < sec){
        for(let  i =0; i < min; i++){
            if(input[0] % i === 0 && input[1] % i === 0){
                if (i > max){
                    max = i;
                }
            }
        }
    // }
    // else if (first > sec){
        // for(let  i =0; i < second; i++){
        //     if(first % i === 0 && sec % i === 0){
        //         if (i > max){
        //             max = i;
        //         }
        //     }
        // }
    // }
    console.log(max)
}

if (process.env.USER === "kartik") {
    runProgram(``);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`51 68`);
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