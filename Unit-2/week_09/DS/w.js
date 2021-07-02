function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var len = input[0];
    // console.log(len)
    input = input[1].trim().split(" ").map(Number);
    // console.log(input)
    count = 0;
    var arr = []
    for(var i = 0; i < len; i++){
        if(input[i] % 2 != 0){
            count++;
        }
        if(input[i] % 2 == 0){
            count = 0;
            continue;
        }
        arr.push(count)
    }
    // console.log(arr);
    
    let max  = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[max] < arr[i]){
            max = i;
        }
    }
    console.log(arr[max])
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`24
    1 1 1 1 2 2 2 2 2 1 1 1 1 1 2 3 3 3 3 3 3 3 3 3`);
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