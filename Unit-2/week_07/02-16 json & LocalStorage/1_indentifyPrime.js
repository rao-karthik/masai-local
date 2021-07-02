function runProgram(input){
    number = input.trim().split(/[\r\n]+/).map(Number);
    // console.log(input);
    var flag = true;
    for(var i = 2; i < number; i++){
        if (number % i == 0){
            flag =  false;
            break;
        }
    }
    if (flag == true){
        console.log("Yes")
    }
    else{
        console.log("No")
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