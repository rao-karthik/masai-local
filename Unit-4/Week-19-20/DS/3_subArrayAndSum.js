function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let [ N, K ] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(arr)

    let totSum = 0;
    let len = 1;

    for(let i = 0; i < N; i++){
        totSum += arr[i];
    }
    // console.log(totSum)

    if(totSum % K !== 0){
        len = n;
    }
    else {
        
    }

    console.log(len);

}

if (process.env.USERNAME === "kartik") {
    runProgram(`5 3
    3 2 2 2 3`);
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

// let sum = 0;
//         let i = 0;
//         let j = 0;
//         while(j < N){
//             sum += arr[j];
//             console.log("sum " + sum)
//             if(sum % K !== 0){
//                 len = Math.max(j-i+1, len);
//                 console.log("len " + len)
//                 j++;
//             }
//             else {
//                 if(len != 0){
//                     sum = sum-arr[i];
//                     len--;
//                     i++;
//                 }
//                 else {
//                     sum = sum-arr[i];
//                     i++;
//                 }
//             }
//         }

// let prefixSum = [];
// let newSum = 0;

// for(let i = 0; i < N; i++){
//     newSum += arr[i];
//     prefixSum.push(newSum);
// }
// // console.log(prefixSum)

// let a = 0;
// let count = 0;
// let rem = 0;

// // console.log(N-len)
// while(a <= N-len){
//     // console.log(a)
//     let b = a+len-1;
//     // console.log(b)
//     let reqSum = prefixSum[b]-rem;
//     // console.log(reqSum);
//     if( reqSum % K !== 0){
//         count++;
//     }
//     rem = arr[a];
//     a++;
// }
// console.log(count);