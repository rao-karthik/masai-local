function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ');

        let res = checkSubset(arr)

        if(res){
            console.log('Yes');
        }
        else {
            console.log('No');
        }
    }
}


function checkSubset(arr){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            return true;
        }
    }
    return false;
}

if (process.env.USER === "kartik") {
    runProgram(`2
    1
    5
    4
    1 2 3 4`);
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