function runProgram(input){
    input = input.trim();
    // console.log(input);

    let num = 0;
    let count = 1;
    for (let i = 0; i < input.length; i++){
        if(input[i] === input[i+1]){
            count++;
        }
        else {
            if (num < count){
                num = count;
            }
            count = 1
        }
    }
    console.log(num);

    // let subStrArr = [];

    // for(let i = 0; i < input.length; i++){
    //     let str = "";
    //     for(let j = i; j < input.length; j++){
    //         str += input[j];
    //         subStrArr.push(str);
    //     }
    // }

    // let max = 0;
    // for (let i = 0; i < subStrArr.length; i++){
    //     let flag = true;
    //     for (let j = 1; j < subStrArr[i].length; j++){
    //         let code = subStrArr[i][0];
    //         if (subStrArr[i][j] !== code){
    //             flag = false;
    //             break;
    //         }
    //         // let code = subStrArr[i].charCodeAt(0);
    //         // if (subStrArr[i].charCodeAt(j) !== code){
    //         //     flag = false;
    //         //     break;
    //         // }
    //     }
    //     if (flag === true){
    //         if(subStrArr[max].length < subStrArr[i].length){
    //             max = i;
    //         }
    //     }
    // }  
    // console.log(subStrArr[max].length)  

}

if (process.env.USER === "kartik") {
    runProgram(`ATTCGGGA`);
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