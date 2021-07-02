//time complexity=O(n)
//space comp-O(1)

function runProgram(input){
    input = input.trim().split(/[\r\n]+/); 
    // console.log(input)

    var line = +input[0];
    var arr = [];
    for (var i = 1; i <= line; i++) {
        arr = input[i].trim().split("");
        console.log(repeated(arr));
    }

}

if (process.env.USERNAME === "kartik") {
    runProgram(`4
aaaaaa
aaabbb
asd
aabbcc`);
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

function repeated(arr) {
    var count = 1;
    var res = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == arr[i + 1]) {
            count++;
        } else {
            if (count > res) {
                res=count
            }
            count=1
        }
    }
    return res
}