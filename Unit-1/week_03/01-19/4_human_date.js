function runProgram(input) {
    var arr  = input.trim().split(/[\r\n]+/)
    // console.log(arr)
    arr = arr[0].trim().split("-")
    // console.log(arr)
    switch(arr[1]){
        case "01":
            console.log(arr[2] + "-January-" + arr[0]);
            break;
        case "02":
            console.log(arr[2] + "-February-" + arr[0]);
            break;
        case "03":
            console.log(arr[2] + "-March-" + arr[0]);
            break;
        case "04":
            console.log(arr[2] + "-April-" + arr[0]);
            break;
        case "05":
            console.log(arr[2] + "-May-" + arr[0]);
            break;
        case "06":
            console.log(arr[2] + "-June-" + arr[0]);
            break;
        case "07":
            console.log(arr[2] + "-July-" + arr[0]);
            break;
        case "08":
            console.log(arr[2] + "-August-" + arr[0]);
            break;
        case "09":
            console.log(arr[2] + "-September-" + arr[0]);
            break;
        case "10":
            console.log(arr[2] + "-October-" + arr[0]);
            break;
        case "11":
            console.log(arr[2] + "-November-" + arr[0]);
            break;
        case "12":
            console.log(arr[2] + "-December-" + arr[0]);
            break;
    }
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