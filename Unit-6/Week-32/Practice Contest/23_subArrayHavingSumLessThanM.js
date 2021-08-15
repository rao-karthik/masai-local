function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [N, M] = input[line++].trim().split(' ').map(Number);

        let arr = input[line++].trim().split(' ').map(Number);
        console.log(arr)

        let j = 0;
        let k = 0;

        let count = 0;
        let temp = 0;
        let sum = arr[0];

        while(j < N && k < N){
            if(sum < M){
                temp++;
                k++;
                count += temp;
                if(k < N){
                    sum += arr[k];
                }
            }
            else {
                sum -= arr[j];
                j++;
                temp--;
            }
        }
        console.log(count);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`1
    5 5
    1 5 1 3 2`);
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