function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[0];
    var numInput = Number(input)
    // console.log(input);
    var flag1 = false;
    var flag2 = false;

    for(var i = 0; i < input.length; i++){
        if(input[i] == "4"){
            flag1 = true;
        }
        if(input[i] == "7"){
            flag2 = true;
        }
    }
    if(flag1 == true && flag2 == true){
        console.log("YES");
    }
    else if(numInput % 4 == 0 || numInput % 7 == 0){
        console.log("YES");
    }
    else {
        console.log("NO")
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