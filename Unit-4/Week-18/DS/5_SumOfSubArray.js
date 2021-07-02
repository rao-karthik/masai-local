function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let test = +input[0];
    let line = 1;

    for (let i = 0; i < test; i++){
        let [ N, K ] = input[line++].trim().split(" ").map(Number);
        // console.log(N, K)
        let arr = input[line++].trim().split(" ").map(Number);
        
        // for(let j = 0; j < N; j++){
        //     var flag = false;
        //     let sum = 0;
        //     for(let k = j; k < N; k++){
        //         sum += arr[k];
        //         if (sum > K){
        //             break;
        //         }
        //         else if(sum === K){
        //             flag = true;
        //             break;
        //         }
        //     }
        //     if(flag === true){
        //         break;
        //     }
        // }

        let sum = arr[0];
        let beg = 0;

        let flag = false;
        for (let i = 1; i <= N; i++){
            while(sum > K && beg < i-1){
                sum -= arr[beg];
                beg++;
            }
            if(sum === K){
                flag = true;
                break;
            }
            if(i < N){
                sum += arr[i];
            }
        }
        if(flag){
            console.log('Yes');
        }
        else {
            console.log('No');
        }
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`10
    7 14
    3 5 4 2 2 1 1
    8 14
    1 7 4 3 2 1 5 6
    2 1
    3 1
    7 1
    1 1 1 1 1 1 1
    2 1
    1 1
    10 2
    2 6 3 3 4 1 1 5 2 4
    3 6
    9 6 4
    7 6
    3 9 6 1 7 8 10
    1 6
    3
    1 1
    3`);
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

// function checkTarget(arr, N, K){

//     let prevSum = new Map();
    
//     let count = 0;
    
//     for(let i = 0; i < N; i++){
//         let curSum = 0;
//         for(let j = i; j < N; j++){
//             curSum += arr[j];
//             if(curSum === K){
//                 count++;
//                 break;
//             }
//         }
//     }
    
//     // for (var i = 0; i < N; i++){
//     //     curSum += arr[i];
//     //     if (curSum === K) {
//     //         count++
//     //     }
//     //     if (prevSum.has(curSum - K)) {
//     //         count +=prevSum.get(curSum-K)
//     //     }
//     //     let add = prevSum.get(curSum);
//     //     if (add == null) {
//     //         prevSum.set(curSum,1)
//     //     } else {
//     //         prevSum.set(curSum, add+1)
//     //     }
//     // }

//     // console.log(prevSum)

//     if(count >= 1){
//         console.log('Yes');
//     }
//     else {
//         console.log('No');
//     }
// }