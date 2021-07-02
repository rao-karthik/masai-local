function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    
    let arr = input[1].trim().split(" ");
    let prod = 1;

    for (var  i = 0; i < arr.length; i++){
        prod *= arr[i];
    }
    
    // let i = 0;
    // while (i < arr.length){
    //     prod *= arr[i++];
    //     // i++;
    // }
    console.log(prod);
    
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`5
    3 5 2 9 4`);
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