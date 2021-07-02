function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    input = input[1].trim().split(" ").map(Number);
    // console.log(input);

    let count = 0;

    let i = 0;

    for (i = 0; i < input.length; i++){
        if(i == 0 && input[i] > input[i+1]){
            count++;
        }
        else if (i == input.length-1 && input[i] > input[i-1]){
            count++;
        }
        else if ( i != 0 && i != input.length-1 && input[i] > input[i-1] && input[i] > input[i+1]){
            count++;
        }
    }

    // while (i < input.length){
    //     if(i == 0 && input[i] > input[i+1]){
    //         count++;
    //     }
    //     else if (i == input.length-1 && input[i] > input[i-1]){
    //         count++;
    //     }
    //     else if ( i != 0 && i != input.length-1 && input[i] > input[i-1] && input[i] > input[i+1]){
    //         count++;
    //     }
    //     i++;
    // }
    console.log(count);
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`8
1 2 3 4 2 1 6 5`);
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