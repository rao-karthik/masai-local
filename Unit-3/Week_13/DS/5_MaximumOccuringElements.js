function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    
    input = input[1].trim().split(" ");
    // console.log(input);

    let obj = {}
    for (let i = 0; i < input.length; i++){
        if(input[i] == " "){
            continue;
        }
        else if (obj[input[i]]){
            obj[input[i]]++
        }
        else {
            obj[input[i]] = 1;
        }
    }
    // console.log(obj);

    let keys = Object.keys(obj);
    // console.log(keys)
    let values = Object.values(obj);
    // console.log(values)
    
    let max = 0;
    for (let i = 1; i < values.length; i++){
        if(values[max] < values[i]){
            max = i;
        }
    }
    console.log(keys[max]);
}

if (process.env.USER === "kartik") {
    runProgram(`5
    0 2 0 6 9`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`5
    0 2 0 6 9`);
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