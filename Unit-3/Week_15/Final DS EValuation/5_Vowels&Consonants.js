function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let arr = [];
    for(let i = 2; i < input.length; i+=2){
        arr.push(input[i].trim().split(''))
    }
    // console.log(arr)

    let strArr1 = []
    for(let i = 0; i < arr.length; i+=2){
        let str = ''
        for(let j = 0; j < arr[i].length; j++){
            if(arr [i][j] === 'a' || arr [i][j] === 'e' || arr [i][j] === 'i' || arr [i][j] === 'o' || arr [i][j] === 'u'){
                str += arr[i][j]
            }
        }
        strArr1.push(str)
    }

    let strArr2 = [];
    for(let i = 1; i < arr.length; i+=2){
        let str = ''
        for(let j = 0; j < arr[i].length; j++){
            if(arr [i][j] !== 'a' && arr [i][j] !== 'e' && arr [i][j] !== 'i' && arr [i][j] !== 'o' && arr [i][j] !== 'u'){
                str += arr[i][j]
            }
        }
        strArr2.push(str);
    }

    for(let i = 0; i < strArr1.length; i++){
        let str = strArr1[i] + strArr2[i]
        console.log(str)
    }
}

if (process.env.USER === "kartik") {
    runProgram(`1
    5
    naman
    4
    aman`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`1
    5
    naman
    4
    aman`);
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