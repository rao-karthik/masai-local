function runProgram(input) {
    var input = input.split(/[\r\n]+/);
    var tests = +input[0];
    var line = 1;
    for (var i = 0; i < tests; i++) {
      var N = +input[line++];

      var arr = input[line++].trim().split(" ").map(Number);

      findSubsets(arr, N);
    }
}

function findSubsets(num, N) {
    const obj = new Map();
    
    obj.set(0, -1);

    var max = 0;
    var count = 0;

    for (var i = 0; i < num.length; i++) {
        if (num[i] === 0) {
            count--;
        } 
        else {
            count++;
        }
        if (obj.has(count) === -1) {
            obj.set(count, i);
        }
        if (obj.has(count)) {
            max = Math.max(max, i - obj.get(count));
            console.log(obj.get(count))
        } 
        else {
            obj.set(count, i);
            console.log(obj)
        }
    }
    console.log(max) ;
}

if (process.env.USER === "kartik") {
    runProgram(`1
    5
    1 0 0 1 0`);
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