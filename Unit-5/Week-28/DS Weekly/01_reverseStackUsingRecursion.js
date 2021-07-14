function runProgram(input){
    input = input.trim().split(/[\r\n]+/).map(Number);

    let len = input.length;

    let ansArr = reverseStack(input, len-1, [])

    for(let i = 0; i < ansArr.length; i++){
        console.log(ansArr[i]);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`1
    2
    3
    4
    -1`);
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
};

function reverseStack (arr, len, ans){
    if(len === 1){
        ans.push(arr[0]);
        return ans;
    }
    ans.push(arr[len-1]);
    return reverseStack(arr, len-1, ans);
}   