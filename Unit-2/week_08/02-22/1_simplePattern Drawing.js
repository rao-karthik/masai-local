function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[0].trim().split(" ").map(Number);
    console.log(input);
    var count = 0;
    for(var i = 0; i < input[0]; i++){
        var str = "";
        for (var j = 0; j < input[1]; j++){
            if (i % 2 == 0){
                str = str + "#";
            }
            if (i % 2 != 0 ){
                count++;
                str = str +"."
                if (count % 2 == 0){
                    str[0] = "#"
                }
                else {
                    str[2] = "#"
                }
            }
        }
        console.log(str)
    }
}

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