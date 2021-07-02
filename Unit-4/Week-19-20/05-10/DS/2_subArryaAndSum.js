//time complexity-O(n)
//space Complexity-O(1)

function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let [n, k] = input[0].trim().split(" ").map(Number);
    // console.log(n, k);

    let arr = input[1].trim().split(" ");
    // console.log(arr)

    console.log(checkDivisbility(arr, n, k))
}

if (process.env.USERNAME === "kartik") {
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

function checkDivisbility(arr, n, k) {
    let sum=0
    for (let i = 0; i <= n; i++){
        sum+=arr[i]
    }
    if ((sum % k) != 0) {
        return 1
    } else {
        let beg = 0
        while (beg < n && arr[beg] % k == 0) {
            beg++;
        }
        let end = 0
        while (end >= 0 && arr[end] % k == 0) {
            end--;
        }

        let len = 0;
        let nSum = 0;
        let count = 0;

        if (beg == n) {
            return -1;
        } else {
            len = Math.max(n - 1 - beg, end);
        }
        for (i = 0; i < len; i++){
            newSum+=arr[i]
        }
        if (sum % k != 0) {
            count++
        }
        for (i = len; i < n; i++){
            newSum = newSum + arr[i]-arr[i-len];
            
        }
        if (sum % k != 0) {
            count++;
        }

    }
    return count;
  }