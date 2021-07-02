function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];
    let line = 1;

    for(let i = 0; i < tests; i++){
        let [N, K] = input[line++].trim().split(" ").map(Number);

        let chems = input[line++].trim().split(" ").map(Number);

        console.log(checkChem(chems, K))
    }
}

if (process.env.USERNAME === "kartik") {
    runProgram(`2
    5 7
    1 2 3 5 4
    5 12
    1 2 3 4 5`);
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

function checkChem(arr,target) {
    var m = 0;
    var n = arr.length - 1;
    while (m < n) {
        if (arr[m] + arr[n] == target) {
            return "Possible"
        }
        else if (arr[m] + arr[n] < target) {
            m++
        }
        else if (arr[m] + arr[n] > target) {
            n--;
        }
    }
    return "Impossible"
  }