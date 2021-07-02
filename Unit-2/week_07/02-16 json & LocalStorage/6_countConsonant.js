function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var str = input[0];
    var count = 0
    for(var i = 0; i < str.length; i++){
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
            count++
        }
    }
    var consonants = str.length - count;
    console.log(consonants);
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