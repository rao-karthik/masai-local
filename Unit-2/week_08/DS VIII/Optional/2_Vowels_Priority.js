function runProgram(input){
    input = input.trim().split(/[\r\n]+/);    
    // console.log(input)
    function vowelP(word){
        var vow = "";
        var con = "";
        for(var i = 0; i < word.length; i++){
            if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"){
                vow+= word[i];
            }
            else {
                con += word[i];
            }
        }
        var newWord = vow + con;
        console.log(newWord);
    }

    for(var i = 1; i < input.length; i++){
        vowelP(input[i])
    }
}

if (process.env.USERNAME === "Kartik") {
    runProgram(`4
eio
masaischool
ubcdefghioel
rhythm`);
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