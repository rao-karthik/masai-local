function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let [ N, K ] = input[0].trim().split(" ").map(Number);
    // console.log( N, K)

    let str = input[1].trim().split('');
    // console.log(str)

    let count = 0;
    
    for( let i = 0; i < N-K+1; i++){
        let pair = str.slice(i, K+i);
        // console.log(pair)
        let flag = unique(pair, K);
        if(flag === true){
            count++;
        }
    }
    console.log(count);
}

if (process.env.USER === "kartik") {
    runProgram(`4 2
    abcc`);
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

function unique(str, K){
    let obj={};
    let flag = true;
    let hashSet = [];
    for(let i = 0; i < str.length; i++){
        if(hashSet.indexOf(str[i]) === -1){
            hashSet.push(str[i]);
        }
    }
    if(hashSet.length < K){
        flag = false;
    }
    return flag;
}