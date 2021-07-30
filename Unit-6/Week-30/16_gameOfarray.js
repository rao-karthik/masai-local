function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let [N, K] = input[0].trim().split(' ').map(Number);

    let arr = input[1].trim().split(' ').map(Number);

    let rotate = rotateArr(arr, K % N)
    console.log(rotate.join(' '))
}

function rotateArr(A, K) {
    if (!A.length) return A;
    let index = -1;
    while (++index < K) {
        A.push(A.shift());
    }
    return A;
}

// function rotateArr(a, n, k){
//     k = k % n;
//     let arr = []
 
//     for (let i = 0; i < n; i++) {
//         if (i < k) {
//             arr.push(a[n + i - k]);
//         }
//         else {
//             arr.push((a[i - k]));
//         }
//     }
//     return arr;
// }

if (process.env.USER === "kartik") {
    runProgram(`6 4
    1 2 5 4 0 6`);
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