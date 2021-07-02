function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 0;

    for(let i = 0; i < tests; i++){
        let n = input[++line].trim();
        let arr = input[++line].trim().split(" ").map(Number);
        // console.log(arr)

        let obj = {};
        let j = 0;
        let k = 0;
        let len = 0;
        while( k < n){
            if(obj[arr[k]] === undefined){
                obj[arr[k]] = 1;
                len = Math.max(len, k-j+1);
                k++;
            }
            else{
                delete obj[arr[j]];
                j++;
            }
        }
        // console.log(obj);
        console.log(len)
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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

function unique(arr) {
    
    let obj = {};
    let flag = true;

    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }
        else {
            obj[arr[i]] = 1
        }
        if(obj[arr[i]] > 1){
            flag = false;
            break;
        }
    }
    return flag;
}