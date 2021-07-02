function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let n = +input[0]
    // console.log(n)
    
    let index = 1;
    let arr = [];
    for(let i = 0; i < input.length-1; i++){
        arr.push(input[index].trim().split(" "));
        index++;
    }
    // console.log(arr)

    /* Rotate 180 */

    // for (let i = n-1; i >= 0; i--){
    //     let str = "";
    //     for(let j = n-1; j >= 0; j--){
    //         str += arr[i][j] + " ";
    //     }
    //     console.log(str);
    // }

    for(let i = 0; i < n/2; i++){
        for(let j = i; j < n-i-1; j++){
            let temp = arr[i][j];
            temp1 = arr[j][n-i-1];
            arr[i][j] = arr[n-i-1][n-j-1];
            arr[j][n-i-1] = arr[n-j-1][i];
            arr[n-i-1][n-j-1] = temp;
            arr[n-j-1][i] = temp1;
        }
    }

    /* Rotate Anticlockwise */

    // for (let i = 0; i < n ; i++){
    //     let str = "";
    //     for(let j = n-1; j >= 0; j--){
    //         str += arr[j][i] + " "
    //     }
    //     console.log(str)
    // }

    // for(let i = 0; i < n/2; i++){
    //     for(let j = i; j < n-i-1; j++){
    //         let temp = arr[i][j];
    //         arr[i][j] = arr[n-j-1][i];
    //         arr[n-j-1][i] = arr[n-i-1][n-j-1];
    //         arr[n-i-1][n-j-1] = arr[j][n-i-1];
    //         arr[j][n-i-1] = temp;
    //     }
    // }

    /* Rotate Clockwise */

    // for(let  i = n-1; i >= 0; i--){
    //     let str = ""
    //     for(let j = 0; j < n; j++){
    //         str += arr[j][i] + " "
    //     }
    //     console.log(str)
    // }
    
    // for(let i = 0; i < n/2; i++){
    //     for(let j = i; j < n-i-1; j++){
    //         let temp = arr[i][j];
    //         arr[i][j] = arr[j][n-i-1];
    //         arr[j][n-i-1] = arr[n-i-1][n-j-1];
    //         arr[n-i-1][n-j-1] = arr[n-j-1][i];
    //         arr[n-j-1][i] = temp;
    //     }
    // }
    // console.log(arr);

    for(let  i = 0; i < arr.length; i++){
        console.log(arr[i].join(' '))
    }
}

if (process.env.USER === "kartik") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`);
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