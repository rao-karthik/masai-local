function runProgram(input){
    input = +input.trim();

    let start;
    let end;
    
    if(input === 2){
        start = 10;
        end = 99;
    }
    else if(input === 3){
        start = 100;
        end = 999;
    }
    else if(input === 4){
        start = 1000;
        end = 9999;
    }
    else if(input === 5){
        start = 10000;
        end = 99999;
    }
    else if(input === 6){
        start = 100000;
        end = 999999;
    }
    else if(input === 7){
        start = 1000000;
        end = 9999997;
    }

    let ans = []
    for(let i = start; i <= end; i++){
        let eSum = evenSum(i.toString());
        let oSum = oddSum(i.toString());

        if(oSum === eSum){
            ans.push(i);
        }
    }

    console.log(ans.join(' '));
}

function evenSum (num){
    let sum = 0;
    for(let i = 0; i < num.length; i+= 2){
        sum += +num[i]
    }
    return sum;
}

function oddSum (num){
    let sum = 0;
    for(let i = 1; i < num.length; i+= 2){
        sum += +num[i]
    }
    return sum;
}

if (process.env.USER === "kartik") {
    runProgram(`7`);
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