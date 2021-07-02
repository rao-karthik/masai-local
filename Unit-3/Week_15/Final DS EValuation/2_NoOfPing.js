function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    let arr = [];
    for(let i = 2; i < input.length;i+=2){
        arr.push(input[i].trim().split(' '));
    }
    
    for(let i = 0; i < arr.length; i++){
        let obj = {};
        for(let j = 0; j < arr[i].length; j++){
            for(let k = 0; k < arr[i][j].length; k++){
                if (arr[i][j][k] === " "){
                    continue;
                }
                else if(obj[arr[i][j][k]]){
                    obj[arr[i][j][k]]++;
                }
                else {
                    obj[arr[i][j][k]] = 1;
                }
            }
        }
        let value = Object.values(obj)
        let key = Object.keys(obj)
        let valueArr = [];
        for (let j = 0; j < key.length; j++){
            if (key[j] == 'p' || key[j] == 'i' || key[j] == 'n' || key[j] == 'g'){
                valueArr.push(value[j])
            }
        }
        let count = Math.min(...valueArr)
        console.log(count)
    }
}

if (process.env.USER === "kartik") {
    runProgram(``);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`2
    7
    pingpin
    8
    pingping`);
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