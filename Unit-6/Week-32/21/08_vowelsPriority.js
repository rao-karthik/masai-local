function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];

    for(let i = 1; i  <= tests; i++){
        let str = input[i].trim().split('');
        let vows = "";
        let cons = "";

        for(let i = 0; i < str.length; i++){
            if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
                vows += str[i];
            }
            else {
                cons += str[i];
            }
        }

        console.log(vows + cons);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`4
    eio
    masaischool
    ubcdefghioel
    rhythm`);
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