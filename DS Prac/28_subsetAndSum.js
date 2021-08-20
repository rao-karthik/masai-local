function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);

    let tS = +input[2];

    // let check = checkSum(arr, N, tS);
    
    // if(check[N-1][tS] === 1){
    //     console.log('yes');
    // }
    // else {
    //     console.log('no');
    // }

    let check = checkSumRec(arr, N, tS, [], 0);

    if(check){
        console.log('yes');
    }
    else {
        console.log('no');
    }
}

// TC = N * Sum
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

function checkSumRec (arr, N, tS, subArray, start){
    let sum = 0
    for(let j=0; j < subArray.length; j++){
        sum += subArray[j]
    }

    if(sum == tS){
        flag = true
        return flag
    }

    for(let i = start ; i < N ; i++){
        subArray.push(arr[i])
        checkSumRec(arr, N, tS, [...subArray], i+1)
        subArray.pop()
    }
}

if (process.env.USER === "kartik") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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