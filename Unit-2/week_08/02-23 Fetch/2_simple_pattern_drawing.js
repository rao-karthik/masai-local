function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[0].trim().split(" ").map(Number);
    // console.log(input);

    function snake(){
        var str = ""
        for (var i = 0; i < input[1]; i++){
            str += "#"
        }
        console.log(str)
    }

    function snakeL(){
        var str = ""
        for(var i = 0; i < input[1]; i++){
            if (i == 0){
                str += "#";
            }
            if (i != 0){
                str += "."
            }
        }
        console.log(str)
    }

    function snakeR(){
        var str = ""
        for(var i = 0; i < input[1]; i++){
            if (i == input[1]-1){
                str += "#";
            }
            if (i != input[1]-1){
                str += "."
            }
        }
        console.log(str)
    }

    var count = 0;
    for(var i = 0; i < input[0]; i++){
        if(i % 2 == 0){
            snake()
        }
        if(i % 2 != 0){
            count++;
            if(count % 2 == 1){
                snakeR()
            }
            if(count % 2 == 0){
                snakeL()
            }
        }
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`5 3`);
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