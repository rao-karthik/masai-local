function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];

    for(let i = 1; i <= tests; i++){
        let even = evenDivisors(+input[i]);
        let odd = oddDivisors(+input[i]);

        if(even > odd){
            console.log('Even Skewed');
        }
        else if (odd > even){
            console.log('Odd Skewed');
        }
        else {
            console.log('Not Skewed');
        }
    }
}

function evenDivisors(num){
    let arr = [];
    for(let i = 2; i <= num; i+= 2){
        if(num % i == 0 ){
            arr.push(i);
        }
    }
    return arr.length;
}
function oddDivisors(num){
    let arr = [];
    for(let i = 1; i <= num; i+= 2){
        if(num % i == 0){
            arr.push(i);
        }
    }
    return arr.length;
}

if (process.env.USER === "kartik") {
    runProgram(`3
    4
    6
    11`);
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