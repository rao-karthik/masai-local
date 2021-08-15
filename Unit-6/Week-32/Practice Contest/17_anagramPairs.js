function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = [];

        for(let j = 0; j < N; j++){
            arr.push(input[line++].trim().split('').sort().join(''));
        }

        arr = arr.sort();
        console.log(arr)

        
        let i = 0;
        let j = 1;

        let count = 0;
        while(i < j && j < N){
            if(arr[i] == arr[j]){
                count++;
                j++;
            }
            else if (arr[i] != arr[j] && j - i == 1){
                i++;
                j++;
            }
            else {
                i++;
                j--;
            }
        }
        console.log(count)
    }
}

if (process.env.USER === "kartik") {
    runProgram(`2
    5
    aaaaabbbbb
    aaaabbbbba
    xxxxxxxxxy
    baabbbbaaa
    yxxxxxxxxx
    2
    abcdefghij
    jighdefabc`);
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