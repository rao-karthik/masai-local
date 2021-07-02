function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [N, K] = input[line++].trim().split(" ").map(Number);

        let arr = input[line++].trim().split(" ").map(Number);
        let flag = false;

        arr = arr.sort((a, b)=> a-b);

        let i = 0;
        let j = arr.length-1;

        while (i < j) {
            if (arr[i] + arr[j] == K) {
                flag = true;
                break;
            } 
            else if (arr[i] + arr[j] < K) {
              i++;
            } 
            else if (arr[i] + arr[j] > K) {
                j--;
            }
        }
        
        if(flag){
            console.log('1');
        }
        else {
            console.log('-1');
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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