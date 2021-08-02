function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = [];
        for(let i = 0; i < N; i++){
            arr.push(input[line++].trim().split('').sort().join(''));
        }

        let obj = {};
        for(let i = 0; i < N; i++){
            if(obj[arr[i]]){
                obj[arr[i]]++;
            }
            else {
                obj[arr[i]] = 1;
            }
        }

        let extra = [];
        for(let key in obj){
            if(obj[key] > 1){
                extra.push(obj[key]-1);
            }
        }

        let sum = 0;

        for(let i = 0; i < extra.length; i++){
            sum += extra[i] * (extra[i] + 1)/2;
        }

        console.log(sum);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
    5
aaaaabbbbb
baabbbbaaa
aaaabbbbba
xxxxxxxxxy
yxxxxxxxxx
2
abcdefghij
jighdefabc`)
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