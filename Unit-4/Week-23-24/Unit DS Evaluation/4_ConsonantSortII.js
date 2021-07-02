function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let test = +input[0];
    let line = 1;

    for(let i = 0; i < test; i++){
        let [ N, M ] = input[line++].trim().split(" ").map(Number);

        let arr = [];
        for(let j = 0; j < N; j++){
            arr.push(input[line++]);
        }
        // console.log(arr)

        let countArr = [];
        for(let j = 0; j < N; j++){
            let count = 0;
            for(let k = 0; k < M; k++){
                if( arr[j][k] !== 'a' &&  arr[j][k] !== 'e' &&  arr[j][k] !== 'i' &&  arr[j][k] !== 'o' &&  arr[j][k] !== 'u' ){
                    count++;
                }
            }
            countArr.push(count);
        }
        // console.log(countArr)
        for(let j = 0; j < N-1; j++){
            for(let k = 0; k < N-j-1; k++){
                if(countArr[k] >= countArr[k+1]){
                    continue;
                }
                else {
                    let temp = arr[k];
                    arr[k] = arr[k+1];
                    arr[k+1] = temp;
                }
            }
        }
        // console.log(arr);

        for(let i = 0; i < N; i++){
            console.log(arr[i]);
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`1
4 4
eaed
fgha
acdf
bbba`);
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