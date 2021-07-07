function runProgram(input){
    input = input.trim().split('');

    findLength(input, 0);
    console.log(findLength(input, 0))
}

if (process.env.USERNAME === "kartik") {
    runProgram(`masaischool`);
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

function findLength (str, len) {
    if(str == ""){
        // console.log(len)
        return len;
    }
    else {
        str.pop();
        return findLength(str, len+1);
    }
}
// function findLength (str, index, len) {
//     if(index === 1){
//         len++
//         console.log(len);
//     }
//     else {
//         len++;
//         findLength(str.splice(0, index-1), index-1, len);
//     }
// }