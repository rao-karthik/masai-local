function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    input = input[1].trim().split(" ").map(Number);
    // console.log(input);
    var sum = 0;
    function isPrime(input){
        var flag  = true;
        for(var i = 2; i < input; i++){
            if (input == 0 || input == 1){
                return false;
            } else
            if (input % i == 0){
                flag = false
                break;   
            }
        }
        if (input == 0 || input == 1){
            return ("Not Prime")
        }
        if (flag == false){
            return("Not Prime")
        }
        if (flag == true){
            return("Prime")
        }
    }
    for(var i = 0; i < input.length; i++){
        for(var j = 0; j < input.length; j++){
            if (j > i){
                if(isPrime(j-i) == "Prime"){
                    var absDiff = Math.abs(input[j]-input[i])
                    sum += absDiff;
                    // console.log(j, i, j-i, absDiff)
                }
            }
        }
    }
    console.log(sum)
}
// 6
// 1 2 3 5 7 12
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
