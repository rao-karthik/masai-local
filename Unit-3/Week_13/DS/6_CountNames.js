function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    let inputArr = [];
    for (let i = 0; i < input.length; i++){
        inputArr.push(input[i].trim())
    }
    // console.log(inputArr)

    const obj = {}
    for (let i = 1; i < inputArr.length; i++){
        if(inputArr[i] == " "){
            continue;
        }
        else if (obj[inputArr[i]]){
            obj[inputArr[i]]++;
        }
        else {
            obj[inputArr[i]] = 1;
        }
    }
    // console.log(obj)

    let keys = Object.keys(obj);
    keys = keys.sort();
    
    for(i = 0; i < keys.length; i++){
        console.log(`${keys[i]} ${obj[keys[i]]}`)
    }

}

if (process.env.USER === "kartik") {
    runProgram(`4
    prateek
    nrupul
    yogesh
    prateek`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`3
    masai
    school
    masai`);
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