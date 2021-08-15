function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    console.log(input);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ');

        let i = 0;
        let j = 1;

        let subStr = "";
        let len = -1;

        let str = arr[i];

        while(i < j && j < N){
            str+= arr[j];
            console.log(str)

            if(!checkDuplicate(str)){
                j++;
                if(str.length > len){
                    len = str.length;
                    subStr = str;
                }
            }
            else {
                str = str.substring(1);
                i++;
            }
        }

        // console.log(subStr)
    }
}

function checkDuplicate(str){
    let obj = {};

    for(let i = 0; i < str.length; i++){
        obj[str[i]]++ || (obj[str[i]] = 1);
    }

    for(let key in obj){
        if(obj[key] > 1){
            return true;
        }
    }
    return false;
}

if (process.env.USER === "kartik") {
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