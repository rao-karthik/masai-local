function runProgram(input){
    input = input.trim();
    // console.log(input);

    let subStr = [];

    for (let i = 0; i < input.length; i++){
        let str = '';
        for(let j = i; j < input.length; j++){
            str += input[j]
            subStr.push(str);
        }
    }
    // console.log(subStr)

    let palindromeArr = [];

    for(let i = 0; i < subStr.length; i++){
        let flag = true;
        let L = subStr[i].length-1;
        for(let j = 0; j < subStr[i].length/2; j++){
            if(subStr[i][j] != subStr[i][L]){
                flag = false;
                break;
            }
            L--;
        }
        if(flag == true){
            palindromeArr.push(subStr[i]);
        }
    }
    // console.log(palindromeArr)

    let max = 0;

    for (let i = 0; i < palindromeArr.length; i++){
        if(palindromeArr[max].length < palindromeArr[i].length){
            max = i;
        }
    }
    console.log(palindromeArr[max].length);

    // let flag = true;

    // let L = input.length;

    // for(let i = 0; i < input.length/2; i++){
    //     if(input[i] != input[L-1]){
    //         flag = false;
    //         break;
    //     }
    //     L--;
    // }
    // if(flag == false){
    //     console.log('No')
    // }
    // else {
    //     console.log('Yes')
    // }
        
}

if (process.env.USER === "kartik") {
    runProgram(`thisracecarisgood`);
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