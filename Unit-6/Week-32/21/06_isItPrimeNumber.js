function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];

    for(let i = 1; i <= tests; i++){

        let check = checkPrime(+input[i]);

        if(check){
            console.log('Yes');
        }
        else {
            console.log('No');
        }
    }
}

function checkPrime (num){
    if(num === 0 || num === 1){
        return false;
    }

    var limit = Math.ceil(Math.pow(num, 1/2));
    if(num !== 2){
        for (var i = 2; i <= limit; i++){
            if(num % i == 0){
                return false
            }
        }
    }
    return true;
}

if (process.env.USER === "kartik") {
    runProgram(`4
    1
    2
    3
    4`);
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