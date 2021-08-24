function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);

        arr.sort((a, b)=> a-b);

        let i = 0;
        let j = N-1;
        let max = 0;
        let flag = false;

        while(i < j){
            if(Math.sign(arr[i]) === -1 && Math.abs(arr[i]) === arr[j]){
                max = arr[j];
                flag = true;
                break;
            }
            else if(Math.sign(arr[i]) === -1 && Math.abs(arr[i]) < arr[j]){
                j--;
            }
            else {
                i++;
            }
        }

        if(flag){
            console.log(max);
        }
        else {
            console.log(-1);
        }
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
    5
    2 1 -1 -2 3
    5
    -3 2 -4 4 -2`);
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