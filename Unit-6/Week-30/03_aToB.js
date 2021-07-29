function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let tests = +input[0];

    for(let i = 1; i <= tests; i++){
        let [A, B] = input[i].trim().split(' ').map(Number);

        if(A === B){
            console.log('Possible');
        }
        else {
            if(checkPossibility(A, B)){
                console.log("Possible")
            }
            else {
                console.log("Not Possible")
            }
        }
    }
}

function checkPossibility(A, B){
    if(A === B){
        return true
    }
    if(A > B){
        return false
    }
    return checkPossibility(A * 2, B) || checkPossibility(+(A + "1"), B)
}

if (process.env.USER === "kartik") {
    runProgram(`4
    6 242
    3 3
    6 3
    10 30`);
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