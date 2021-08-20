function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = [];
        
        for(let i = 0; i < N; i++){
            arr.push(input[line++].trim().split(' ').map(Number));
        }
        
        let newArr = [];

        for(let i = 0; i < N; i++){
            if(i === 0){
                for(let j = 0; j < N; j++){
                    newArr.push(arr[i][j]);
                }
            }

            if(i > 0 && i < N-1){
                for(let j = N-2; j > 0; j--){
                    newArr.push(arr[i][j]);
                    i++;
                }
            }

            if(i === N-1){
                for(let j = 0; j < N; j++){
                    newArr.push(arr[i][j]);
                }
            }
        }

        console.log(newArr.join(' '));
    }
}

if (process.env.USER === "kartik") {
    runProgram(`1
    4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`);
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