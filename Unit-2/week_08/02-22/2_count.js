function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[0].trim().split(" ").map(Number);
    console.log(input);
    var n = input[0];
    var m = input[1];

    var subArr = []
    for(var i = 0; i < n; i++){
        var str = ""
        for(var j = i; j < n; j++){
            str += j
            console.log(str)
            if(str.length == 2){
                subArr.push(str)
            }
        }
    }
    // console.log(subArr)
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