function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let [N, K] = input[0].trim().split(" ").map(Number);

    let arr = input[1].trim().split(" ").map(Number);

    for(let i = 0; i < N-1; i++){
        for(let j = 0; j < N-i-1; j++){
            let temp1 = arr[j] % K;
            let temp2 = arr[j+1] % K;

            if(temp1 > temp2){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    let str = "";
    arr.forEach(element => {
        str += element + " ";
    });
    console.log(str)
}

if (process.env.USERNAME === "kartik") {
    runProgram(`5 6
    12 18 17 65 46`);
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