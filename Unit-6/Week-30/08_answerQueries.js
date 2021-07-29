function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let arrLen = +input[0].trim();

    let arr = input[1].trim().split(' ').map(Number);

    let qLen = +input[2].trim();

    let query = input[3].trim().split(" ").map(Number);

    arr.sort((a,b) => a-b)

    for(let i=0; i<qLen; i++){
        if(arr[arrLen-1] < query[i]){
            console.log("NO")
        }
        else {
            if(arr.includes(query[i])){
                console.log("YES")
            }
            else {
                console.log("NO")
            }
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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