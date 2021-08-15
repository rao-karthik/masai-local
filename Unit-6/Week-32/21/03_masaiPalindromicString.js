function runProgram(input){
    input = input.trim();
    
    let N = input.length;
    let arr = [];

    for(let i = 0; i < N; i++){
        let str = '';
        for(let j = i; j < N; j++){
            str += input[j];
            arr.push(str);
        }
    }

    // console.log(arr)

    let len = 0;

    for(let i = 0; i < arr.length; i++){
        
        let flag = checkPalindrome(arr[i]);

        if(flag){
            if(len < arr[i].length){
                len = arr[i].length;
            }
        }
    }
    console.log(len);
}

function checkPalindrome (str){
    let i = 0;
    let j = str.length-1;

    while(i < j){
        if(str[i] != str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

if (process.env.USER === "kartik") {
    runProgram(`thisracecarisgood`);
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