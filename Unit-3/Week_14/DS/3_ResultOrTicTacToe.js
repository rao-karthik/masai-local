function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let index = 0;
    let len = input.length;
    let arr = [];
    for (let i = 0; i < len; i++){
        arr.push(input[index].trim().split(" "));
        index++;
    }
    // console.log(arr);

    let flag = true;
    for (let i = 0; i < 3; i++){
        if(arr[i][0] == 'o' && arr[i][1] == 'o' && arr[i][2] == 'o' ){
            flag = false;
        }
        else if (i == 0 && arr[0][0] == 'o' && arr[1][1] == 'o' && arr[2][2] == 'o'){
            flag = false;
        }
        else if (i == 0 && arr[2][0] == 'o' && arr[1][1] == 'o' && arr[0][2] == 'o'){
            flag = false;
        }
    }
    if(flag === true){
        console.log('x');
    }
    else {
        console.log('o');
    }
}

if (process.env.USER === "kartik") {
    runProgram(`x o x
    o x x
    o o o`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`x o x
    o x x
    o o o`);
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