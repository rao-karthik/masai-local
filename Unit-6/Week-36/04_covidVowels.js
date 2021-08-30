function runProgram(input){
    input = input.trim();

    let vowels = ['a', 'o', 'i', 'u'];
    let count = 0;

    let subStr = [];
    for(let i = 0; i < input.length; i++){
        let str = '';
        for(let j = i; j < input.length; j++){
            str += input[j];
            subStr.push(str);
        }
    }

    for(let i = 0; i < subStr.length; i++){
        let str = subStr[i].split('');
        let flag = true;
        for(let j = 0; j < vowels.length; j++){
            if(str.includes(vowels[j]) == false){
                flag = false;
                break;
            }
        }
        if(flag){
            count++;
        }
    }
    console.log(count);
}

if (process.env.USER === "kartik") {
    runProgram(`dangerouscovid`);
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