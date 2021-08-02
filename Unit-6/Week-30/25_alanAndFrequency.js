function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let len = +input[0];

    let str = input[1].trim();

    let obj = {};

    for(let i = 0; i < len; i++){
        if(obj[str[i]]){
            obj[str[i]]++;
        }
        else {
            obj[str[i]] = 1;
        }
    }

    const sorted = Object.keys(obj).sort().reduce((newObj, key)=>{
        newObj[key] = obj[key];
        return newObj
    }, {})

    for(let key in sorted){
        console.log(key + "-" + sorted[key]);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`4
    anman`);
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