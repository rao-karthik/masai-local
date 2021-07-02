function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var arr1 = input[1].trim().split(" ");
    // console.log(arr1);
    var arr2 = input[2].trim().split(" ");
    // console.log(arr2);
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                console.log(arr1[i]);
            }
        }
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