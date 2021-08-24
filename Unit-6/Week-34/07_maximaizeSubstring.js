function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let len = +input[0];
    let str = input[1].trim();

    let max = lexMaxSubstr(str, len);
    console.log(max);
}

// function lexMaxSubstr (str, len){
//     let max = "";

//     for(let i = 0; i < len; i++){
//         if(max.localeCompare(str.substring(i)) <= 0){
//             max = str.substring(i);
//         }
//     }

//    return max;
// }

function lexMaxSubstr (str, len){

    let maxChar = 'a';
    let index = [];

    for(let i = 0; i < len; i++){
        if(str[i] >= maxChar){
            maxChar = str[i];
            index.push(i);
        }
    }

    let maxStr = '';

    for(let i = 0; i < index.length; i++){
        let subStr = str.substring(index[i], str.length);

        if(subStr > maxStr){
            maxStr = subStr;
        }
    }

    return maxStr;
}

if (process.env.USER === "kartik") {
    runProgram(`6
    ababaa`);
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