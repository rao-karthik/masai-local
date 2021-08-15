function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let [ N, K ] = input[0].trim().split(" ").map(Number);

    let str = input[1].trim().split('');

    let count = 0;
    
    for( let i = 0; i < N-K+1; i++){
        let pair = str.slice(i, K+i);
        
        let flag = uniqueChars(pair, K);
        if(flag === true){
            count++;
        }
    }
    console.log(count);
}

function uniqueChars (str, K){
    let hashSet = [];

    for(let i = 0; i < str.length; i++){
        if(hashSet.indexOf(str[i]) === -1){
            hashSet.push(str[i]);
        }
    }

    if(hashSet.length < K){
        return false;
    }
    return true;
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