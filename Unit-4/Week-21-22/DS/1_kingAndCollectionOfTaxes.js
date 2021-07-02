function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let N = +input[0].trim();
    // console.log(N)

    let arr = input[1].trim().split(" ").map(Number);
    // console.log(arr)

    arr = arr.sort((a, b) => a-b);

    let tax = 0;
    let i = 0;
    let j = arr.length-1;

    while (i < j){
        tax += arr[j];
        j--;
        i++;
    }
    console.log(tax);
}

if (process.env.USERNAME === "kartik") {
    runProgram(`2
    1 3 1 2`);
}
else {
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