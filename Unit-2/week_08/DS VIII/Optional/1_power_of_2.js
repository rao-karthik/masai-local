function runProgram(input){
    input = input.trim().split(/[\r\n]+/).map(Number);    
    // console.log(input)
    var length = input[0];

    function isPow(x){
        var str = []
        for(var i = 1; i <= 31; i++){
            var pow2 = 2**i;
            str.push(pow2)
        }
        // console.log(str)
        for(var i = 0; i < str.length; i++){
            if (input[x] == str[i]){
                return true;
                break;
            }
        }
    }

    for(var i = 1; i <= length; i++){
        if(isPow(i) == true){
            console.log("True")
        }
        else{
            console.log("False")
        }
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`2
    2
    3`);
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