function runProgram(input){
    input = input.trim().split(" ");
    
    var input = input[0];
    // console.log(input);

    var count = 0;
    var arr = [];
    for(var i = 0; i < input.length; i++){
        if(i!= 0 && input[i-1] != input[i]){
            count = 0;
            count++;
        }
        else{
            count++
        }
        arr.push(count);
    }
    // console.log(arr);

    var max = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[max] < arr[i]){
            max = i;
        }
    }
    console.log(arr[max]);
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`AAAACCCGGT`);
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