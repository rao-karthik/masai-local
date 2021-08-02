// function runProgram(input){
//     input = input.trim().split(/[\r\n]+/);
//     console.log(input);

//     let [ N, K] = input[0].trim().split(" ").map(Number);

//     let arr = input[1].trim().split(" ").map(Number);

//     let count = findSumNotDivisibleByK(arr, N, K);
//     console.log(count)
// }

// function findSumNotDivisibleByK (arr, N, K) {
//     let start = 0;
//     let end = 0;
//     let temp = 0;
//     let count = 0;
//     let sum = arr[0];

//     while(start < N && end < N){
//         if(sum % K !== 0){
//             temp++;
//             end++;
//             count += temp;
//             if(end < N){
//                 sum += arr[end];
//             }
//         }
//         else {
//             sum -= arr[start];
//             start--;
//             end--;
//         }
//     }
//     return count;
// }

function runProgram(input) {
    input = input.trim().split("\n");
  
    let [len, sum] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(subArraysDivByK(arr, sum));
  }
  
  const subArraysDivByK = (arr, k) => {
    let aPointer = 1;
    let bPointer = 0;
    let sum = arr.reduce((a, b) => a + b);
    let len = 0;
    let count = 0;
    if (sum % k != 0) {
      return 1;
    }
  
    let temp = 0;
    sum = arr[0];
    while (aPointer < arr.length && bPointer < arr.length) {
      temp++;
      if (sum % k != 0) {
        sum += arr[aPointer]; // 6
        len = Math.max(temp, len); // 1
        aPointer++;
      } else {
        sum -= arr[bPointer]; // 4
        temp--;
        bPointer++;
      }
    }
  
    sum = 0;
    for (let i = 0; i < len; i++) {
      sum += arr[i];
    }
    if (sum % k != 0) {
      count++;
    }
    for (let i = len; i < arr.length; i++) {
      sum += arr[i];
      sum -= arr[len - i];
      if (sum % k != 0) {
        count++;
      }
    }
    return count;
  };

if (process.env.USER === "kartik") {
    runProgram(`4 3
2 3 4 6`);
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