function runProgram(input){
    let [H, R] = input.trim().split(" ").map(Number);

    if(R > H){
        [H, R] = [R, H];
    }

    while(R < H){
        R = R + sumOfDigits(R);
    }

    if(H === R){
        console.log(H);
    }
    else {
        while (H < R){
            console.log(H, R)
            H = H + sumOfDigits(H);
            R = R + sumOfDigits(R);
        }
        
        if(H === R){
            console.log(H);
        }
        else {
            console.log(-1);
        }
    }
}

function sumOfDigits (num) {
    num = num.toString().split('').map(Number);
    
    let sum = 0;
    let i = 0;
    let j = num.length-1;

    while (i <= j){
        if(i === j){
            sum += num[i];
        }
        else {
            sum += num[i] + num[j];
        }
        i++;
        j--;
    }
    
    return sum;
}

if (process.env.USER === "kartik") {
    runProgram(`30793 83060`);
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