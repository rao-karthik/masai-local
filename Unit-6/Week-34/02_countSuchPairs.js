function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let [n, k] = input[0].trim().split(' ').map(Number);

    let arr = input[1].trim().split(' ').map(Number);

    let count = countPairs(arr, n, k);
    console.log(count)
}

function countPairs(arr, n, k){
    
    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(i !== j){
                if(arr[i] + arr[j] === k){
                    count++;
                }
            }
        }
    }
    return count;
}

if (process.env.USER === "kartik") {
    runProgram(`5 9
    3 0 6 2 7`);
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