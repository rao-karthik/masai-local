function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let n = +input[0];
    let str = input[1].trim();

    let i = 0;
    let j = n-1;
    let flag = true;

    while (i < j){
        if(str[i] !== str[j]){
            flag = false;
            break;
        }
        i++;
        j--;
    }

    if(flag){
        console.log('Yes');
    }
    else {
        console.log('No');
    }
}

if (process.env.USER === "kartik") {
    runProgram(`6
    nrupul`);
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