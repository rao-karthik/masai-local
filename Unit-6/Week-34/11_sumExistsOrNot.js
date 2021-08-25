function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];
    let arr = input[1];
    let sum = +input[2];

    let flag = checkSum(arr, N, sum);
    console.log(flag)
    
    if(flag === 1){
        console.log('yes');
    }
    else {
        console.log('no');
    }
}

function checkSum (arr, N, sum){

    let newArr = new Array(N).fill().map(() => new Array(sum+1).fill(0));

    for(let i = 0; i < N; i++){
        for (let s = 0; s <= sum; s++){
            if (s === 0){
                newArr[i][s] = 1;
            }

            if(arr[i] == s){
                newArr[i][s] = 1;
            }

            if(i !== 0 && newArr[i-1][s] === 1){
                newArr[i][s] = 1;
            }

            if(i !== 0 && newArr[i-1][s] === 0){
                let diff = s - arr[i];
                if(diff >= 0){
                    newArr[i][s] = newArr[i-1][diff];
                }
            }
        }
    }

    return newArr;
}

// function checkSum(N, arr, sum){
//     if(sum === 0){
//         return true;
//     }
//     if(N <= 0){
//         return false;
//     }
//     if(arr[N-1] > sum){
//         return checkSum(N-1, arr, sum);
//     }

//     return checkSum(N-1, arr, sum) || checkSum(N-1, arr, sum - arr[N-1]);
// }

if (process.env.USER === "kartik") {
    runProgram(`6
    3 34 4 12 5 2
    9`);
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