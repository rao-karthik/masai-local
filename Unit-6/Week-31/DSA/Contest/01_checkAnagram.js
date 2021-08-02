function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for (let i = 0; i < tests; i++){
        let str1 = input[line++].trim();
        let str2 = input[line++].trim();

        let check = checkAnagram(str1, str2);
        if(check){
            console.log('True');
        }
        else {
            console.log('False');
        }
    }
}

function checkAnagram (str1, str2){
    let count = [];

    for(let i = 0; i < str1.length; i++){
        count[i] = 0;
    }

    for(let i = 0; i < str1.length; i++){
        count[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        count[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
  
    if (str1.length != str2.length)
        return false;

    for(i = 0; i < str1.length; i++)
        if (count[i] != 0)
        {
            return false;
        }
    return true;
}

if (process.env.USER === "kartik") {
    runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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