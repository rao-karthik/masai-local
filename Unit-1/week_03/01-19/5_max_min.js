function runProgram(input) {
    arr  = input.trim().split(/[\r\n]+/)
    arr = arr[0].trim().split(" ");
    console.log(arr)
    var min = arr[0];
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(max < Number(arr[i])){
            max = Number(arr[i])
        }
        else if (min > Number(arr[i])){
            min = Number(arr[i])
        }
    }
    console.log(min + " " + max)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
read += input;
});
process.stdin.on("end", function () {
read = read.replace(/\n$/, "");
runProgram(read);
});
process.on("SIGINT", function () {
read = read.replace(/\n$/, "");
runProgram(read);
process.exit(0);
});