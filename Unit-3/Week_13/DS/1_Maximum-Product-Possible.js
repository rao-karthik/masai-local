function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input)

    let arr = [];
    for (let i = 2; i < input.length; i+=2){
        arr.push(input[i].trim().split(" ").map(Number));
    }
    // console.log(arr)
    
    for(let i = 0; i < arr.length; i++){
        let prod = 1;
        let max = 0;
        for(let j = 0; j < arr[i].length-1; j++){
            for(let k = j+1; k < arr[i].length; k++){
                prod = arr[i][j] * arr[i][k];
                if(max < prod){
                    max = prod;
                }
            }
        }
        console.log(max)
    }
}

if (process.env.USER === "kartik") {
    runProgram(`3
    6 
    1 0 7 2 4 0
    5
    1 2 3 4 5
    2
    0 0`);
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