function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    let tests = +input[0];
    let arr = [];
    let line = 1;
    let sortedArr = [];

    for(let i = 0; i < tests; i++){
        let str = input[line++].trim();
        arr.push(str);
        
        sortedArr.push(str.split('').sort().join(''))
    }

    let index = [0];
    let obj = {};

    obj[sortedArr[0]] = arr[0];

    for(let i = 1; i < sortedArr.length; i++){
        if(obj[sortedArr[i]] == null){
            index.push(i);
            obj[sortedArr[i]] = arr[i];
        }
    }

    let values = Object.values(obj).sort();
    console.log(values.length)
    
    for(let i = 0; i < values.length; i++){
        console.log(values[i]);
    }
}

function checkAnagram (str1, str2){
    
}

if (process.env.USER === "kartik") {
    runProgram(`5
    eodc
    odec
    code
    baca
    aabc`);
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