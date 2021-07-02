function runProgram(input){
    input = Number(input.trim());
    // console.log(input);

    // let revInput = "";
    // for (let i = input[0].length-1; i >= 0; i--){
    //     revInput += input[0][i];
    // }
    // // console.log(revInput)
    
    // if (input == revInput){
    //     console.log('Yes');
    // }
    // else {
    //     console.log('No');
    // }

    let x = input;

    let count_digits = 0;

    let z = x;

    while (z != 0){
        z = Math.floor(z/10);
        count_digits++;
    }
    // console.log(count_digits)
    
    let sum = 0;
    while (x != 0){
        let last = x % 10; 
        sum += last*(10**(count_digits-1));
        x = Math.floor(x/10);
        count_digits--;
    }
    console.log(sum)

    if (input == sum){
        console.log('Yes');
    }
    else {
        console.log('No');
    }
}

if (process.env.USER === "kartik") {
    runProgram(`121`);
} else {
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