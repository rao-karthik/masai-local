function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    let arr = [];
    for (let i = 2; i < input.length; i+=2){
            arr.push(input[i].trim().split(" ").map(Number));
    }
    // console.log(arr)

    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr[i].length-2; j++){
            if(arr[i][j] % 2 == 0 && arr[i][j+1] % 2 == 0 && arr[i][j+2] % 2 == 0 ){
                count++
            }
        }
        if(count == 0){
            console.log('No');
        }
        else {
            console.log('Yes');
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
    3
    1 2 3
    5
    1 2 4 6 8`);
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