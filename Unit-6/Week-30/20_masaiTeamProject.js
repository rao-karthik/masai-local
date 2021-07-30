function runProgram(input){
    input = input.trim().split(/[\r\n]+/);
    console.log(input)

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let N = +input[line++];

        let arr = input[line++].trim().split(' ').map(Number);

        arr = arr.join('');
        let newArr = [];

        generateSubSequence(arr, "", newArr);

        newArr.map(item=> if(item.length === 3) {return item});
        console.log(newArr)
    }
}

function generateSubSequence(str, res, arr)
{
      if(str.length == 0) {
        arr.push(res.split(''));
        return
    }
    generateSubSequence(str.substring(1),res, arr)
    generateSubSequence(str.substring(1),res+str.charAt(0), arr)
}

if (process.env.USER === "kartik") {
    runProgram(`3
    3
    1 2 3
    6
    1 2 3 1 2 3
    6
    1 1 1 1 1 1`);
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