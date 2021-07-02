function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input);

    var tests = +input[0]

    var line = 1

    // for (var i = 0; i < tests; i++) {
    //     var row = +input[++line]
    //     var arr = []
    //     for (var j = 0; j < row; j++) {
    //         arr.push(input[++line].trim().split(" ").map(Number))
    //     }
    //     // console.log(arr)

    //     for(var j=0;j<arr.length;j++){
    //         var str=""
    //         for(var k= arr[j].length-1;k>=0;k--){
    //             str+= arr[k][j]+" "
    //         }console.log(str)
    //     }
    // }
    for ( let i = 0; i < tests; i++){
        let row = +input[line++].trim();
        for (let j = 0; j < row; j++){
            
        }
    }
}


if (process.env.USER === "kartik") {
    runProgram(`2
    4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
    3
    1 2 3
    4 5 6
    7 8 9`);
} 
else if (process.env.USERNAME === "kartik") {
    runProgram(`2
    4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
    3
    1 2 3
    4 5 6
    7 8 9`);
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