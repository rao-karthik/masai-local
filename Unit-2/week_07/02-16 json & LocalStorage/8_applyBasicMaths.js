function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);
    var number = input[1].trim().split(" ").map(Number);

    var sumArr = [];
    var indexArr= []
    var flag = true;
    for(var i = 0; i < number.length; i++){
        var sum = 0;
        for(var j = 0; j < number.length; j++){
            if (i != j){
                sum = sum + number[j];
            }
        }
        if(sum % 7 == 0){
            indexArr.push(i);
        }
    }
    // console.log(indexArr)

    var min = indexArr[0];
    for(var i = 0; i < indexArr.length; i++){
        if(number[min] > number[indexArr[i]]){
            min = indexArr[i];
        }
    }
    if (indexArr.length == 0){
        console.log("-1")
    }
    else{
        console.log(min)
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