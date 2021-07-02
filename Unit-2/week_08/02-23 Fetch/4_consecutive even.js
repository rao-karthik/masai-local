function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var inputarr = [];
    for(var i = 2; i < input.length; i++){
        if (i % 2 == 0){
            var str = input[i].trim().split(" ").map(Number);
            inputarr.push(str)
        }
    }    
    // console.log(inputarr;)

    for(var i = 0; i < inputarr.length; i++){
        // console.log(inputarr[i])
        var count = 0;
        for(var j = 0; j < inputarr[i].length-2; j++){
            if(inputarr[i][j] % 2 == 0 && inputarr[i][j+1] % 2 == 0 && inputarr[i][j+2] % 2 == 0){
                count++;
            }
        }
        if (count == 0){
            console.log("No");
        }
        else {
            console.log("Yes");
        }
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`2
    3
    1 2 3
    5
    1 2 4 6 8`);
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
