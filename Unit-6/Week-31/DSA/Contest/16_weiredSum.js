function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1

    for(let i = 0; i < tests; i++){
        let N = +input[line++].trim();

        let arr = input[line++].trim().split(' ').map(Number);
        let max = Math.max(...arr);
        
        let count = [];
        
        function checkSubset (start, subset, arr, max, count) {
            let sum = checkSum(subset);
            if(sum === max){
                count = count.push(subset);
                return;
            }
        
            for(let i = start; i < arr.length-1; i++){
                subset.push(arr[i]);
                checkSubset(i+1, subset, arr, max, count); 
                subset.pop();
            }
        }

        checkSubset(0, [], arr, max, count);
        
        if(count.length > 0){
            console.log('Yes');
        }
        else {
            console.log('No');
        }
    }
}

function checkSum (arr){
    let i = 0;
    let j = arr.length-1;

    let sum = 0;
    while(i <= j){
        if(i == j){
            sum += arr[i];
        }
        else {
            sum += arr[i] + arr[j];
        }
        i++;
        j--;
    }
    return sum;
}

if (process.env.USER === "kartik") {
    runProgram(`3
    3
    1 2 3
    4
    0 1 2 3
    4
    2 3 6 10`);
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