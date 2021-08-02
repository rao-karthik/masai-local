function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 1; i <= tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(" ").map(Number);

        doubleMiss(arr, N)
    }
}

function doubleMiss (arr, N){
    let obj = {};

        let doub;

        arr.forEach(num => {
            if(obj[num]){
                obj[num]++
                doub =  num
            }else{
                obj[num] = 1
            }
        })
        
        let missn
        for(let i = 1; i <= N; i++){
            if(arr[i-1] != i){
                missn = i
            }
        }

        console.log(missn, doub)
}

if (process.env.USER === "kartik") {
    runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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